import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import { useEffect } from "react";
import ProductInfo from "../components/ProductId/ProductInfo.jsx";
import SimilarProducts from "../components/ProductId/SimilarProducts.jsx";
import SliderImg from "../components/ProductId/SliderImg.jsx";

const ProductIdPage = () => {
  const { id } = useParams();
  const BASE_URL = import.meta.env.VITE_REACT_APP_URL
  const baseUrl = BASE_URL;
  const [product, getProductById] = useFetch(baseUrl);

  useEffect(() => {
    getProductById(`/products/${id}`);
  }, [id]);

  return (
    <>
      <section className="relative top-24 m-auto flex w-[90%] flex-col gap-2 tp:top-36 tp:col-start-1 tp:col-end-9 tp:row-start-1 tp:row-end-7">
        <h2 className="mb-4 flex items-center gap-2 font-serif text-lg">
          Home{" "}
          <span className="inline-block h-3 w-3 rounded-[50%] bg-red-500"></span>
          <span className="font-semibold text-stone-700">{product?.title}</span>
        </h2>
        <div className="flex h-max flex-col gap-16 ml:m-auto ml:max-w-[560px] tp:max-w-full tp:flex-row">
          <SliderImg product={product} />
          <ProductInfo product={product} />
        </div>
        <SimilarProducts product={product} />
      </section>
    </>
  );
};

export default ProductIdPage;
