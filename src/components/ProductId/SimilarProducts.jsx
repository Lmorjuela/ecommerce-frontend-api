import { useEffect } from "react";
import useFetch from "../../hooks/useFetch.js";
import CardProduct from "../Home/CardProduct.jsx";

const SimilarProducts = ({ product }) => {
  const BASE_URL = import.meta.env.VITE_REACT_APP_URL
  const baseUrl = BASE_URL;

  const [productByCategory, getProductByCategory] = useFetch(baseUrl);

  useEffect(() => {
    if (product) {
      getProductByCategory(`/products?categoryId=${product.category.id}`);
    }
  }, [product]);

  return (
    <footer className="mt-4 flex flex-col">
      <h2 className="mb-8 font-serif text-base font-semibold text-red-600 mm:text-xl">
        Discover Similar Items
      </h2>
      <div className="flex w-full flex-wrap items-center justify-center gap-8">
        {productByCategory?.map((prod) => {
          if (product.id !== prod.id)
            return <CardProduct key={prod.id} product={prod} />;
        })}
      </div>
    </footer>
  );
};

export default SimilarProducts;
