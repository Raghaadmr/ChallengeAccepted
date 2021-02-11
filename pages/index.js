import { getData } from "../utils/fetchData";
import { useState } from "react";
import Head from "next/head";
import ProductItem from "../components/product/ProductItem";

const Home = (props) => {
  const [products, setProducts] = useState(props.products);
  console.log(products);

  return (
    <div>
      <Head>"Home page "Raghad youre doing amazing sweetie</Head>
      {products.length === 0 ? (
        <h2>NO PRODUCTS AT THE MOMENT</h2>
      ) : (
        products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const { products, result } = await getData("product");
  //server side rendering!
  return {
    props: { products, result }, // will be passed to the page component as props
  };
}
export default Home;
