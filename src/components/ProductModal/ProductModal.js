import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormContainer } from "../../pages/Login/login.style";
import { selectIsAddProductModalOpen } from "../../redux/reducers/app/app.selectors";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import CustomButton from "../CustoButton/CustomButton";
import TextInput from "../TextInput/TextInput";
import {
  CheckboxContainer,
  ProductModalContainer,
} from "./product-modal.style";
import { toggleAddProductModal } from "../../redux/reducers/app/app.actions";
import { categories } from "../../data/categories";
import { selectProducts } from "../../redux/reducers/product/product.selectors";
import { selectUserToken } from "../../redux/reducers/user/user.selectors";
import { verifyToken } from "../../querries/auth.querries";
import { addProduct } from "../../querries/product.querries";
import Resizer from "react-image-file-resizer";

const ProductModal = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const token = useSelector(selectUserToken);
  const isAddProductModalOpen = useSelector(selectIsAddProductModalOpen);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    imgURI: "",
    crossed: [],
    allergenes: [],
    hidden: false,
  });

  const selectProductsInCrossed = products.filter(
    (product) =>
      product.category === "nos-boissons" ||
      product.category === "nos-accompagnements" ||
      product.category === "nos-desserts"
  );

  useEffect(() => {
    setNewProduct((prevState) => ({
      ...prevState,
      crossed: [
        ...selectProductsInCrossed.map((p) => ({ ...p, isChecked: false })),
      ],
    }));
  }, []);

  console.log(newProduct);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    let object = { ...newProduct };
    let crossed = object.crossed
      .flatMap((p) => {
        const { _id, isChecked, ...otherProps } = p;
        return { _id, isChecked };
      })
      .filter((i) => i.isChecked);
    object.crossed = [...crossed];
    formData.append("name", object.name);
    formData.append("price", object.price);
    formData.append("description", object.description);
    formData.append("crossed", JSON.stringify(object.crossed));
    formData.append("category", object.category);
    formData.append("imgURI", object.imgURI);
    formData.append("allergenes", JSON.stringify(object.allergenes));
    formData.append("hidden", object.hidden);

    let isValid = await verifyToken(token, dispatch);

    if (isValid) {
      addProduct(token, formData, dispatch);
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
        setNewProduct({ ...newProduct, imgURI: uri });
      },
      "file"
    );
  };
  return (
    <ProductModalContainer open={isAddProductModalOpen}>
      <CategoryTitle>Ajouter un produit</CategoryTitle>
      <FormContainer onSubmit={handleSubmit}>
        <TextInput
          type="text"
          name="name"
          value={newProduct.name}
          label="Nom"
          handleChange={handleChange}
        />
        <TextInput
          type="number"
          step={0.1}
          min={0}
          pattern="\\d*"
          name="price"
          value={newProduct.price}
          label="Prix"
          handleChange={handleChange}
        />
        <TextInput
          type="text"
          name="description"
          value={newProduct.description}
          label="Description"
          handleChange={handleChange}
        />
        <label htmlFor="category-selector">Categories</label>
        <select id="category-selector" onChange={handleChange} name="category">
          <option value="">Selectionez une categorie</option>
          {categories.map((category) => (
            <option
              selected={newProduct.category === category.slug}
              value={category.slug}
            >
              {category.name}
            </option>
          ))}
        </select>
        <span>Suggestions</span>
        <CheckboxContainer>
          {newProduct.crossed.map((product) => (
            <div>
              <label htmlFor={product._id}>{product.name}</label>
              <input
                id={product.id}
                type="checkbox"
                checked={product.isChecked}
                onChange={() =>
                  setNewProduct((prevState) => ({
                    ...prevState,
                    ...(product.isChecked = !product.isChecked),
                  }))
                }
              />
            </div>
          ))}
        </CheckboxContainer>
        <input
          type="file"
          files={newProduct.imgURI}
          name="imgURI"
          accept="image/*"
          onChange={(e) => setImage(e)}
        />
        <CustomButton type="submit" positive>
          Ajouter
        </CustomButton>
      </FormContainer>
      <CustomButton
        type="button"
        negative
        onClick={() => dispatch(toggleAddProductModal())}
      >
        Annuler
      </CustomButton>
    </ProductModalContainer>
  );
};

export default ProductModal;
