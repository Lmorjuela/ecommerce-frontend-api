import { useNavigate } from "react-router-dom";

const PurchaseCard = ({ product }) => {
  const navigate = useNavigate();

  const redirectProductId = () => {
    navigate(`/product/${product.productId}`);
  };

  const date = product.createdAt.slice(0, 10).split("-");
  const formattedDate = `${date[2]}-${date[1]}-${date[0]}`;

  return (
    <article
      onClick={redirectProductId}
      className="grid w-4/5 cursor-pointer grid-cols-5 gap-x-2 mm:grid-cols-7 tp:grid-cols-9"
    >
      <img
        className="h-16 w-16 object-contain"
        src={product.product?.productImgs[0].url}
      />
      <h3 className="col-start-2 col-end-5 text-sm font-semibold tp:text-lg">
        {product.product.title}
      </h3>
      <div className="text-center text-sm font-semibold text-stone-500 max-tp:hidden tp:col-start-5 tp:col-end-7 tp:text-lg">
        <span>{formattedDate}</span>
      </div>
      <div className="text-center text-sm font-semibold text-stone-700 tp:col-start-7 tp:text-lg">
        <span className="flex h-6 w-6 items-center justify-center border-2 p-2 tp:h-8 tp:w-8">
          {product.quantity}
        </span>
      </div>
      <div className="col-start-6 col-end-8 text-center text-sm font-semibold text-stone-700 tp:col-start-8 tp:col-end-10 tp:text-lg">
        <span>$ {product.product.price}</span>
      </div>
    </article>
  );
};

export default PurchaseCard;
