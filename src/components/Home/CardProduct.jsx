import { Link, useNavigate } from "react-router-dom";
import { postCartThunk } from "../../store/slice/cart.slice.js";
import { useDispatch, useSelector } from "react-redux";
import { setVerifyProductCartG } from "../../store/slice/verifyProductCart.slice.js";
import { useState } from "react";

const CardProduct = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDetail = () => {
    navigate(`/product/${product.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const verifyProductCart = useSelector((state) => state.verifyProductCart);

  const handleHiddenAlert = () => {
    dispatch(setVerifyProductCartG(false));
  };

  const removeLoginSection = () => {
    dispatch(setVerifyProductCartG(false));
  };

  const handleAddCart = (e) => {
    e.stopPropagation();
    dispatch(postCartThunk(product));
  };

  const user = window.localStorage.getItem("user");
  const isEmptyLocalStorage = window.localStorage.length;

  return (
    <>
      <article
        onClick={handleDetail}
        className="max-h-[600px] w-full max-w-[280px] cursor-pointer rounded-xl border border-solid border-gray-400 p-2 hover:scale-105 mm:max-w-[300px]"
      >
        <header className="group relative aspect-square border-b border-solid border-gray-400">
          <img
            className="m-auto h-[90%] w-[90%] object-contain opacity-100 transition-opacity duration-700 group-hover:opacity-0"
            src={product?.productImgs[0].url}
            alt=""
          />
          <img
            className="absolute top-0 h-full w-full object-contain opacity-0 transition-opacity duration-700 group-hover:opacity-100  "
            src={product?.productImgs[1].url}
            alt=""
          />
        </header>
        <section className="grid grid-cols-2 grid-rows-2 gap-4 pb-8 pl-4 pr-4 pt-6">
          <div className="col-span-2 row-span-1 h-40">
            <h3 className="text-base font-light ">{product.brand}</h3>
            <h2 className="text-2xl font-medium">{product.title}</h2>
          </div>
          <div className="row-span-2 ">
            <span className="text-base font-light">Price</span>
            <h3 className="text-2xl font-medium">{product.price}</h3>
          </div>
          <button
            onClick={handleAddCart}
            className="relative right-4 top-8 aspect-square w-16 justify-self-center rounded-[50%] bg-red-600 text-2xl text-white hover:brightness-110"
          >
            <i className="bx bx-cart-alt"></i>
          </button>
        </section>
      </article>
      {verifyProductCart && user && (
        <div className="fixed left-0 top-0 z-40 flex h-screen w-screen place-content-center place-items-center backdrop-blur-[0.4px]">
          <div className="flex h-44 w-96 flex-col place-content-center items-center gap-4 rounded-lg bg-white text-xl shadow-sm">
            <h2 className="text-stone-700">
              This product is already in your cart🙂
            </h2>
            <button
              className="w-44 rounded-md bg-blue-600 p-2 text-white hover:brightness-125"
              onClick={handleHiddenAlert}
            >
              Accept
            </button>
          </div>
        </div>
      )}
      {verifyProductCart && isEmptyLocalStorage === 0 && (
        <div className="fixed left-0 top-0 z-40 flex h-screen w-screen place-content-center place-items-center backdrop-blur-[0.4px]">
          <div className="flex h-44 w-96 flex-col place-content-center items-center gap-4 rounded-lg bg-white p-2 text-xl shadow-sm">
            <i
              onClick={removeLoginSection}
              className="bx bx-x cursor-pointer self-end text-2xl text-red-600"
            ></i>
            <h2 className="text-center text-stone-700">
              Please log in to add products to your cart 🙄
            </h2>
            <button
              className="w-44 rounded-md bg-blue-600 p-2 text-white hover:brightness-125"
              onClick={handleHiddenAlert}
            >
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CardProduct;
