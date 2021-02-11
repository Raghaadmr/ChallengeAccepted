import Link from "next/link";
import { useState, useContext } from "react";
import { decrease, increase } from "../store/Actions";
import Modal from "./Modal";

const CartItem = ({ item, dispatch, cart }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <tr>
      <td style={{ width: "100px", overflow: "hidden" }}>
        <img
          src={item.images[0].url}
          alt={item.images[0].url}
          className="img-thumbnail w-100"
          style={{ minWidth: "80px", height: "80px" }}
        />
      </td>

      <td style={{ minWidth: "200px" }} className="w-50 align-middle">
        <h5 className="text-capitalize text-secondary">
          <Link href={`/product/${item._id}`}>
            <a>{item.title}</a>
          </Link>
        </h5>

        <h6 className="text-danger">${item.quantity * item.price}</h6>
        {item.inStock > 0 ? (
          <p className="mb-1 text-danger">In Stock: {item.inStock}</p>
        ) : (
          <p className="mb-1 text-danger">Out Stock</p>
        )}
      </td>

      <td className="align-middle" style={{ minWidth: "150px" }}>
        <button
          className="btn btn-outline-secondary"
          onClick={() => dispatch(decrease(cart, item._id))}
          disabled={item.quantity === 1 ? true : false}
        >
          -
        </button>

        <span className="px-3">{item.quantity}</span>

        <button
          className="btn btn-outline-secondary"
          onClick={() => dispatch(increase(cart, item._id))}
          disabled={item.quantity === item.inStock ? true : false}
        >
          +
        </button>
      </td>

      <td
        className="align-middle"
        style={{ minWidth: "50px", cursor: "pointer" }}
      >
        <button
          className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="button"
          style={{ transition: "all .15s ease" }}
          data-toggle="modal"
          data-target="#exampleModal"
          onClick={() => {
            setShowModal(true);
            dispatch({
              type: "ADD_MODAL",
              payload: [
                {
                  data: cart,
                  id: item._id,
                  title: item.title,
                },
              ],
            });
          }}
        >
          REMOVE
        </button>
        {showModal ? <Modal /> : null}
      </td>
    </tr>
  );
};

export default CartItem;
