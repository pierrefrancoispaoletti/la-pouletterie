import { localServerURI } from "../_consts/server/server";
export const products = [
  {
    name: "produit 1",
    _id: 1,
    category: "nos-desserts",
    price: 10,
    hidden: false,
    imgURI: `${localServerURI}/uploads/pouletterie.jpeg`,
    description: "description 1",
    crossed: [2, 3, 4, 5],
    allergenes: [],
  },
  {
    name: "produit 2",
    _id: 2,
    category: "nos-desserts",
    price: 10,
    hidden: false,
    imgURI: `${localServerURI}/uploads/pouletterie.jpeg`,
    description: "description 2",
    crossed: [2, 3, 4, 5],
    allergenes: [],
  },
  {
    name: "produit 3",
    _id: 3,
    category: "nos-boissons",
    price: 10,
    hidden: false,
    imgURI: `${localServerURI}/uploads/pouletterie.jpeg`,
    description: "description 3",
    crossed: [2, 3, 4, 5],
    allergenes: [],
  },
  {
    name: "produit 4",
    _id: 4,
    category: "nos-accompagnements",
    price: 10,
    hidden: false,
    imgURI: `${localServerURI}/uploads/pouletterie.jpeg`,
    description: "description 4",
    crossed: [2, 3, 4, 5, 2, 3, 4, 5],
    allergenes: [],
  },
];
