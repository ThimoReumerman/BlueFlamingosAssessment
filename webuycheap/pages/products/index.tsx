import { product } from "@prisma/client";
import axios from "axios";
import { GetStaticProps } from "next";
import Image from 'next/image';

interface ProductProps {
  products: product[]
}

const Products = ({products}: ProductProps): JSX.Element => {
  return (
    <>
      <h1>Products</h1>

      <div id="products">
        {products.map(product => {
          return (
            <div className="product">
              <h2>{product.name}</h2>
              <img src={product.image} alt={`Image of ${product.name}`} width="300px" height="200px" />
              <p className="price">{`€${product.price}`}</p>
              <a href={product.link}>BUY</a>
            </div>
          );
        })}
      </div>
    </>
  )
}

const getStaticProps: GetStaticProps<ProductProps> = async() => {
  console.log("GETTING STATIC PROPS");

  const res = await axios.get<product[]>('http://localhost:3000/api/products?count=25');

  console.log(res);

  const products = res.data;

  return {
    props: {
      products: products
    }
  };
}

export {getStaticProps};

export default Products;