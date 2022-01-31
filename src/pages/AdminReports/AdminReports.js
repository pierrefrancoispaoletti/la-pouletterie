import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { localServerURI } from "../../_consts/server/server";

const AdminReports = () => {
  const [rawOrders, setRawOrders] = useState([]);
  const [args, setArgs] = useState({
    deliveryMode: "",
    status: "",
    date: "",
    user: "",
  });

  useEffect(() => {
    const asyncCall = async () => {
      const response = await axios({
        method: "GET",
        url: `${localServerURI}/api/orders/all-raw`,
      });

      const {
        data: { orders },
      } = response;
      setRawOrders(orders);
    };

    asyncCall();
  }, []);

  const generateArrayOfYear = () => {
    let min = new Date().getFullYear();
    let max = min + 10;
    let years = [];
    years.push(min - 1);
    for (let index = min; index <= max; index++) {
      years.push(index);
    }
    return years;
  };

  const generateArrayofMonth = () => {
    return Array.from({ length: 12 }, (item, index) => {
      return new Date(0, index).toLocaleDateString("fr-FR", { month: "long" });
    });
  };

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
            console.log(username);
            if (username === undefined || !username.includes(args[key])) {
              return false;
            }
            return obj;
          }
        }
        return obj;
      }),
    [args, rawOrders]
  );
  let computedAmount;
  const computeAmountOfOrder = useCallback(({ products }, computedAmount) => {
    computedAmount = products
      .reduce((acc, amt) => acc + amt._id.price * amt.quantity, 0)
      .toFixed(2);
    return computedAmount;
  }, []);

  const users = Array.from(
    new Set(
      rawOrders
        .map((order) => `${order.user.lastname} ${order.user.firstname}`)
        .filter((i) => i !== undefined)
    )
  );

  const dvModes = Array.from(
    new Set(
      rawOrders
        .map((order) => order.deliveryMode)
        .filter((i) => i !== undefined)
    )
  );

  const status = Array.from(
    new Set(
      rawOrders.map((order) => order.status).filter((i) => i !== undefined)
    )
  );

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
        Total général :
        {filteringFunction()
          .flatMap((order) => order.products)
          .reduce((acc, amt) => acc + amt._id.price * amt.quantity, 0)
          .toFixed(2)}{" "}
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
              <tr>
                <td>
                  {order.user.lastname} {order.user.firstname}
                </td>
                <td>{order.date}</td>
                <td>{order.deliveryMode}</td>
                <td>{order.status}</td>
                <td>
                  {order && computeAmountOfOrder(order, computedAmount)}
                  <small>€</small>
                </td>
                <td>
                  <ul style={{ listStyle: "none" }}>
                    {order.products.map(({ _id, quantity }) => (
                      <li style={{ textAlign: "center" }}>
                        {_id.name} x {quantity}
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
