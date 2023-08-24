import { useDispatch } from "react-redux";
import { deleteCartThunk } from "../../store/slice/cart.slice.js";

const CartElement = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCartThunk(product.id));
  };

  return (
    <article className="grid grid-cols-4 grid-rows-2 gap-x-2">
      <header className="col-start-1 col-end-2 row-start-1 row-end-2">
        <img
          className="h-20 w-20 object-contain"
          src={product.product?.productImgs[0].url}
        />
      </header>
      <section className="col-start-2 col-end-4 row-start-1 row-end-2">
        <h3 className="font-semibold text-stone-600 mm:text-lg">
          {product.product.title}
        </h3>
        <p>
          <span>{product.quantity}</span> x <span>{product.product.price}</span>
        </p>
      </section>
      <section className="text-center">
        <button className="text-red-500 mm:text-lg" onClick={handleDelete}>
          <i className="bx bx-trash"></i>
        </button>
      </section>
      <footer className="col-start-3 col-end-5 row-start-2 row-end-2 flex gap-2 self-center justify-self-end text-xs mm:text-sm">
        <span className="text-stone-600">Total</span>
        <span className="font-semibold text-stone-800">
          $ {product.quantity * product.product.price}
        </span>
      </footer>
    </article>
  );
};

export default CartElement;
