import { useSelector } from "react-redux";
import CartElement from "../components/Cart/CartElement.jsx";
import usePurchases from "../hooks/usePurchases.js";

const CartPage = () => {
  const cart = useSelector((states) => states.cart);

  const totalPrice = cart?.reduce((acc, cv) => {
    const subtotal = cv.quantity * cv.product.price;
    return acc + subtotal;
  }, 0);

  const { makePurchase } = usePurchases();

  const handlePurchase = () => {
    makePurchase();
  };

  console.log(cart);
  return (
    <div className="relative top-16 m-auto flex h-[85vh] w-screen max-w-[700px] flex-col items-center gap-2 mm:top-28  tp:top-20 tp:col-start-2 tp:col-end-8 tp:row-start-1 tp:row-end-7 tp:m-auto tp:gap-4">
      <h2 className="w-4/5 text-xl font-bold text-stone-700 mm:text-2xl">
        Shopping Cart
      </h2>
      {cart?.length ? (
        <div className="flex h-[71%] w-4/5 flex-col gap-2 overflow-y-scroll">
          {cart?.map((product) => (
            <CartElement key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex h-[71%] w-4/5 flex-col place-content-center items-center text-center font-serif text-2xl text-stone-700">
          <h4>You haven't added any products to this cart yet ☹️</h4>
        </div>
      )}
      <footer className="relative bottom-0 z-20 flex h-[20%] max-h-[90px] w-4/5 flex-col items-center justify-center gap-2 bg-white font-serif mm:text-lg">
        <div className="flex w-full justify-between font-semibold">
          <span className="text-stone-600">Total</span>
          <span className="text-stone-800">$ {totalPrice}</span>
        </div>
        <button
          className="w-48 bg-red-500 p-1 text-white hover:brightness-110 mm:p-2"
          onClick={handlePurchase}
        >
          Checkout
        </button>
      </footer>
    </div>
  );
};

export default CartPage;
