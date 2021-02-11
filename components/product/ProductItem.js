import Link from "next/link";
import { useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import { addToCart } from "../../store/Actions";

const ProductItem = ({ product }) => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  const userLink = () => {
    return (
      <>
        <Link href={`product/${product._id}`}>
          <a
            className="inline-block bg-gray-200 rounded-full px-10 py-4 text-sm font-semibold text-gray-700 mr-2 mb-5"
            style={{ marginRight: "5px", flex: 1 }}
          >
            View
          </a>
        </Link>
        <button
          className="inline-block bg-gray-200 rounded-full px-10 py-4 text-sm font-semibold text-gray-700 mr-2 mb-5"
          style={{ marginLeft: "5px", flex: 1 }}
          disabled={product.inStock === 0 ? true : false}
          onClick={() => dispatch(addToCart(product, cart))}
        >
          Buy
        </button>
      </>
    );
  };

  return (
    <div className="p-10">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={product.images[0].url}
          alt={product.images[0].url}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.title}</div>
          <div className="row justify-content-between mx-0">
            <h6>${product.price}</h6>
            {product.inStock > 0 ? (
              <h6>In Stock: {product.inStock}</h6>
            ) : (
              <h6>Out Stock</h6>
            )}
          </div>
          <p className="text-gray-700 text-base">{product.description}</p>
        </div>
        {userLink()}
      </div>
    </div>
  );
};

export default ProductItem;
