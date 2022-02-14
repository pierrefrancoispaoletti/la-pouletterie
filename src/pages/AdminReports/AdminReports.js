import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useFetchAllRawOrders } from "../../CustomHooks/useFetchRawOrders";
import { selectAllRawOrders } from "../../redux/reducers/order/order.selectors";

const AdminReports = () => {
  useFetchAllRawOrders();
  const rawOrders = useSelector(selectAllRawOrders);
  const [args, setArgs] = useState({
    deliveryMode: "",
    status: "",
    date: "",
    user: "",
  });

  const generateArrayOfYear = useCallback(() => {
    let min = new Date().getFullYear();
    let max = min + 10;
    let years = [];
    years.push(min - 1);
    for (let index = min; index <= max; index++) {
      years.push(index);
    }
    return years;
  }, []);

  const generateArrayofMonth = useCallback(() => {
    return Array.from({ length: 12 }, (item, index) => {
      return `${new Date(0, index).toLocaleDateString("fr-FR", {
        month: "long",
      })} ${new Date().getFullYear()}`;
    });
  }, []);

  const filteringFunction = useCallback(
    () =>
      rawOrders.filter((obj) => {
        for (const key in args) {
          if (key !== "user") {
            if (obj[key] === undefined || !obj[key]?.includes(args[key])) {
              return false;
            }
          } else {
            const username = `${obj[key]["lastname"]} ${obj[key]["firstname"]}`;
            if (username === undefined || !username.includes(args[key])) {
              return false;
            }
          }
        }
        return obj;
      }),
    [args, rawOrders]
  );

  const computeAmountOfOrder = useCallback(({ products, status }) => {
    let computedAmount = products
      .reduce(
        (acc, amt) =>
          status !== "REMBOURSEE"
            ? acc + amt.price * amt.quantity
            : acc - amt.price * amt.quantity,
        0
      )
      .toFixed(2);
    return computedAmount;
  }, []);

  const computeTotalAmount = useCallback(() => {
    const totalAmount = filteringFunction()
      .flatMap((order) => order.products)
      .reduce((acc, amt) => acc + amt.price * amt.quantity, 0);

    const totalRefundedAmount = filteringFunction()
      .flatMap((order) =>
        order.status === "REMBOURSEE" ? order.products : undefined
      )
      .filter((i) => i !== undefined)
      .reduce((acc, amt) => acc - amt.price * amt.quantity, 0);
    return (totalAmount + totalRefundedAmount).toFixed(2);
  }, [filteringFunction]);

  const selectGenerator = useCallback(
    (primaryKey = "", secondaryKey = "", thirdKey = "") => {
      if (primaryKey && secondaryKey && thirdKey) {
        return Array.from(
          new Set(
            rawOrders
              .map(
                (order) =>
                  `${order[primaryKey][secondaryKey]} ${order[primaryKey][thirdKey]}`
              )
              .filter((i) => i !== undefined)
          )
        );
      }
      return Array.from(
        new Set(
          rawOrders
            .map((order) => order[primaryKey])
            .filter((i) => i !== undefined)
        )
      );
    },
    [rawOrders]
  );

  const users = selectGenerator("user", "lastname", "firstname");

  const dvModes = selectGenerator("deliveryMode");

  const status = selectGenerator("status");

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      setArgs({ ...args, [name]: value });
    },
    [args]
  );

  return (
    <div>
      <h1>Total des commandes : {rawOrders.length}</h1>
      <h1>Total des produits filtrés : {filteringFunction().length}</h1>
      <h2>
        Total général :{computeTotalAmount()}
        <small>€</small>
      </h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          padding: "12px",
        }}
      >
        <select name="user" onChange={handleChange}>
          <option value="">Selectionnez un utilisateur</option>
          {users &&
            users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
        </select>
        <select name="deliveryMode" onChange={handleChange}>
          <option value="">Selectionnez un mode de livraison</option>
          {dvModes &&
            dvModes.map((mode) => (
              <option key={mode} value={mode}>
                {mode}
              </option>
            ))}
        </select>
        <select name="status" onChange={handleChange}>
          <option value="">Selectionnez status de commande</option>
          {status &&
            status.map((sta) => (
              <option key={sta} value={sta}>
                {sta}
              </option>
            ))}
        </select>
        <select name="date" onChange={handleChange}>
          <option value="">Selectionnez un mois de l'année</option>
          {generateArrayofMonth().map((month) => (
            <option key={month} value={month}>
              {month.toUpperCase()}
            </option>
          ))}
        </select>
        <select name="date" onChange={handleChange}>
          <option value="">Selectionnez l'année</option>
          {generateArrayOfYear().map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div>
        <table style={{ textAlign: "center", width: "100%" }}>
          <thead>
            <tr>
              <th>utilisateur</th>
              <th>date</th>
              <th>mode</th>
              <th>status</th>
              <th>montant commande</th>
              <th>produits commandés</th>
            </tr>
          </thead>
          <tbody>
            {filteringFunction().map((order) => (
              <tr key={order._id}>
                <td>
                  {order.user.lastname} {order.user.firstname}
                </td>
                <td>{order.date}</td>
                <td>{order.deliveryMode}</td>
                <td>{order.status}</td>
                <td>
                  {order && computeAmountOfOrder(order)}
                  <small>€</small>
                </td>
                <td>
                  <ul style={{ listStyle: "none" }}>
                    {order.products.map(({ _id, quantity, name }, index) => (
                      <li key={_id + index} style={{ textAlign: "center" }}>
                        {name} x {quantity}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminReports;
