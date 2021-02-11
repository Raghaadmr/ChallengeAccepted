import Head from "next/head";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../store/GlobalState";
import OrderItem from "../components/OrderItem";
import Link from "next/link";

const Order = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev) => {
        return prev + item.price * item.quantity;
      }, 0);

      setTotal(res);
    };

    getTotal();
  }, [cart]);

  // Here to update whenever the DB is updates

  return (
    <div className="row mx-auto">
      <Head>
        <title>order page</title>
      </Head>

      <div className="">
        <h2 className="">Order</h2>

        <table className="table my-3">
          <tbody>
            {cart.map((item) => (
              <OrderItem
                key={item._id}
                item={item}
                dispatch={dispatch}
                cart={cart}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-md-4 my-3 text-right text-uppercase text-secondary">
        <form>
          <h2>Shipping</h2>

          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            className="form-control mb-2"
          />

          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            className="form-control mb-2"
          />
        </form>

        <h3>
          Total: <span className="text-danger">${total}</span>
        </h3>

        <Link href={"/signin"}>
          <a className="btn btn-dark my-2">Proceed with payment</a>
        </Link>
      </div>
    </div>
  );
};

export default Order;
