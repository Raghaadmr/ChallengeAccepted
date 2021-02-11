import Head from "next/head";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../store/GlobalState";
import CartItem from "../components/CartItem";
import Link from "next/link";
import { getData } from "../utils/fetchData";
import { useRouter } from "next/router";

const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);

      setTotal(res);
    };

    getTotal();
  }, [cart]);

  // Here to update whenever the DB is updates
  useEffect(() => {
    const cartLocal = JSON.parse(
      localStorage.getItem("__next__cart01__raghad")
    );
    //I used if state to not get an error when its empty
    if (cartLocal && cartLocal.length > 0) {
      let newArr = [];
      const updateCart = async () => {
        for (const item of cartLocal) {
          const res = await getData(`product/${item._id}`);
          // Sold attribute is removed because it unnecessary for users
          const { _id, title, images, price, inStock } = res.product;
          if (inStock > 0) {
            newArr.push({
              _id,
              title,
              images,
              price,
              inStock,

              quantity: item.quantity > inStock ? 1 : item.quantity,
            });
          }
        }

        dispatch({ type: "ADD_CART", payload: newArr });
      };

      updateCart();
    }
  }, []);
  return (
    <div className="row mx-auto">
      <Head>
        <title>Cart Page</title>
      </Head>

      <div className="">
        <h2 className="">Shopping Cart</h2>

        <table className="table my-3">
          <tbody>
            {cart.map((item) => (
              <CartItem
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
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            className="form-control mb-2"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
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

export default Cart;
