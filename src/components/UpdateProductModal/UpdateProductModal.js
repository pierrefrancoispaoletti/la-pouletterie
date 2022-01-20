import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyToken } from "../../querries/auth.querries";
import { selectIsUpdateProductModalOpen } from "../../redux/reducers/app/app.selectors";
import {
  selectCrossedProductsToEdit,
  selectProducts,
  selectProductToEdit,
} from "../../redux/reducers/product/product.selectors";
import { selectUserToken } from "../../redux/reducers/user/user.selectors";
import {
  CheckboxContainer,
  ProductModalContainer,
  SelectContainer,
} from "../ProductModal/product-modal.style";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import { FormContainer } from "../../pages/Login/login.style";
import TextInput from "../TextInput/TextInput";
import { categories } from "../../data/categories";
import CustomButton from "../CustoButton/CustomButton";
import { toggleUpdateProductModal } from "../../redux/reducers/app/app.actions";
import { updateProduct } from "../../querries/product.querries";

//dependance
import Resizer from "react-image-file-resizer";

const INITIAL_STATE = {
  _id: "",
  name: "",
  price: "",
  description: "",
  category: "",
  imgURI: "",
  crossed: [],
  allergenes: [],
  hidden: false,
};

const UpdateProductModal = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const productToEdit = useSelector(selectProductToEdit);
  const crossedProductsInEditProduct = useSelector(selectCrossedProductsToEdit);
  const token = useSelector(selectUserToken);
  const isUpdateProductModalOpen = useSelector(selectIsUpdateProductModalOpen);

  const [updatedProduct, setUpdatedProduct] = useState(INITIAL_STATE);

  let allProductsToShowInCrossed = products.filter(
    (product) =>
      product.category === "nos-boissons" ||
      product.category === "nos-accompagnements" ||
      product.category === "nos-desserts"
  );

  useEffect(() => {
    let filteredCrossedValues = () =>
      allProductsToShowInCrossed.filter((i) => {
        if (crossedProductsInEditProduct?.length > 0) {
          return crossedProductsInEditProduct.some((j) => {
            if (i._id !== j._id) {
              return i;
            } else {
              return j;
            }
          });
        }
        return allProductsToShowInCrossed.map((p) => (p.isChecked = false));
      });

    setUpdatedProduct({
      ...productToEdit,
      crossed: [
        ...filteredCrossedValues()?.map((p) =>
          p.isChecked ? p : { ...p, isChecked: false }
        ),
      ],
    });
  }, [productToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    let object = { ...updatedProduct };
    let crossed = object.crossed
      .flatMap((p) => {
        const { _id, isChecked, ...otherProps } = p;
        return { _id, isChecked };
      })
      .filter((i) => i.isChecked);
    object.crossed = [...crossed];
    formData.append("_id", object._id);
    formData.append("name", object.name);
    formData.append("price", object.price);
    formData.append("description", object.description);
    formData.append("crossed", JSON.stringify(object.crossed));
    formData.append("category", object.category);
    formData.append("imgURI", object.imgURI);
    formData.append("allergenes", JSON.stringify(object.allergenes));
    formData.append("hidden", object.hidden);

    let validToken = await verifyToken(token, dispatch);

    if (validToken) {
      updateProduct(validToken, formData, dispatch);
    }
  };

  const setImage = async (e) => {
    Resizer.imageFileResizer(
      e.target.files[0],
      500,
      500,
      "JPEG",
      100,
      0,
      (uri) => {
        setUpdatedProduct({ ...updatedProduct, imgURI: uri });
      },
      "file"
    );
  };
  return (
    <ProductModalContainer open={isUpdateProductModalOpen}>
      <CategoryTitle>Editer un produit</CategoryTitle>
      <FormContainer onSubmit={handleSubmit}>
        <TextInput
          required
          type="text"
          name="name"
          value={updatedProduct.name}
          label="Nom"
          handleChange={handleChange}
        />
        <TextInput
          required
          type="number"
          step={0.1}
          min={0}
          pattern="\\d*"
          name="price"
          value={updatedProduct.price}
          label="Prix"
          handleChange={handleChange}
        />
        <TextInput
          type="text"
          name="description"
          value={updatedProduct.description}
          label="Description"
          handleChange={handleChange}
        />
        <label style={{ alignSelf: "flex-start" }} htmlFor="category-selector">
          Categories
        </label>
        <SelectContainer
          required
          id="category-selector"
          onChange={handleChange}
          name="category"
        >
          <option value="">Selectionez une categorie</option>
          {categories.map((category) => (
            <option
              selected={updatedProduct.category === category.slug}
              value={category.slug}
            >
              {category.name}
            </option>
          ))}
        </SelectContainer>
        <span style={{ alignSelf: "flex-start" }}>Suggestions</span>
        <CheckboxContainer>
          {updatedProduct?.crossed?.map((product) => (
            <div>
              <label htmlFor={product._id}>{product.name}</label>
              <input
                id={product._id}
                type="checkbox"
                checked={product.isChecked}
                onChange={() => {
                  const index = updatedProduct.crossed.findIndex(
                    (i) => i._id === product._id
                  );
                  let newProduct = { ...updatedProduct.crossed[index] };
                  let newCrossed = [...updatedProduct.crossed];
                  newProduct.isChecked = !product.isChecked;
                  newCrossed.splice(index, 1);
                  newCrossed = [...newCrossed, newProduct];
                  setUpdatedProduct({ ...updatedProduct, crossed: newCrossed });
                }}
              />
            </div>
          ))}
        </CheckboxContainer>
        <label style={{ alignSelf: "flex-start", marginBottom: "8px" }}>
          Ajouter une photo
        </label>
        <input
          type="file"
          files={updatedProduct.imgURI}
          name="imgURI"
          accept="image/*"
          onChange={(e) => setImage(e)}
        />
        <CustomButton type="submit" positive>
          Editer
        </CustomButton>
      </FormContainer>
      <CustomButton
        type="button"
        negative
        onClick={() => dispatch(toggleUpdateProductModal())}
      >
        Annuler
      </CustomButton>
    </ProductModalContainer>
  );
};

export default UpdateProductModal;
