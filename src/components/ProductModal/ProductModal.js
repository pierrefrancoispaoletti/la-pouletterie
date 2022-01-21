import React, { useEffect, useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";

//redux actions
import { toggleAddProductModal } from "../../redux/reducers/app/app.actions";

//selectors
import { selectIsAddProductModalOpen } from "../../redux/reducers/app/app.selectors";
import { selectProducts } from "../../redux/reducers/product/product.selectors";
import { selectUserToken } from "../../redux/reducers/user/user.selectors";

//data source
import { categories } from "../../data/categories";

//Components
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import CustomButton from "../CustoButton/CustomButton";
import TextInput from "../TextInput/TextInput";

// styles
import {
  CheckboxContainer,
  ProductModalContainer,
  SelectContainer,
} from "./product-modal.style";
import { FormContainer } from "../../pages/Login/login.style";

//querries
import { verifyToken } from "../../querries/auth.querries";
import { addProduct } from "../../querries/product.querries";

//dependance
import Resizer from "react-image-file-resizer";
import { clearForm } from "../../utils/utils";
const INITIAL_STATE = {
  name: "",
  price: "",
  description: "",
  category: "",
  imgURI: "",
  crossed: [],
  allergenes: [],
  stock: "",
  hidden: false,
};
const ProductModal = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const token = useSelector(selectUserToken);
  const isAddProductModalOpen = useSelector(selectIsAddProductModalOpen);

  const [newProduct, setNewProduct] = useState(INITIAL_STATE);

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

    let validToken = await verifyToken(token, dispatch);

    if (validToken) {
      addProduct(validToken, formData, dispatch);
      clearForm(setNewProduct, INITIAL_STATE);
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
          required
          type="text"
          name="name"
          value={newProduct.name}
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
        <TextInput
          type="number"
          name="stock"
          value={newProduct.stock}
          label="Stock"
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
              selected={newProduct.category === category.slug}
              value={category.slug}
            >
              {category.name}
            </option>
          ))}
        </SelectContainer>
        <span style={{ alignSelf: "flex-start" }}>Suggestions</span>
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
        <label style={{ alignSelf: "flex-start", marginBottom: "8px" }}>
          Ajouter une photo
        </label>
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
