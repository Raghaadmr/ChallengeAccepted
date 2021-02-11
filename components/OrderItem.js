import Link from "next/link";

const OrderItem = ({ item }) => {
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
      </td>
    </tr>
  );
};

export default OrderItem;
