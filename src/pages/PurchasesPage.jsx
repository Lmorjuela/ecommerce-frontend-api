import { useEffect } from "react";
import usePurchases from "../hooks/usePurchases.js";
import PurchaseCard from "../components/Purchases/PurchaseCard.jsx";

const PurchasesPage = () => {
  const { purchases, getAllPurchases } = usePurchases();

  useEffect(() => {
    getAllPurchases();
  }, []);

  return (
    <div className="relative top-20 flex min-w-[320px] flex-col items-center gap-2 mm:top-24 tp:top-32 tp:col-start-1 tp:col-end-9 tp:row-start-1 tp:row-end-6 tp:gap-4">
      <h3 className="flex w-4/5 max-w-[650px] items-center gap-2 font-serif text-xs text-stone-700 tp:max-w-[1000px] tp:text-base">
        Home
        <span className="inline-block h-2 w-2 rounded-[50%] bg-red-600"> </span>
        <span className="font-semibold">Purchases</span>
      </h3>
      <h2 className="mb-4 w-4/5 max-w-[650px] font-serif text-xl font-bold text-stone-800 tp:mb-8 tp:max-w-[1000px] tp:text-3xl">
        My purchases
      </h2>
      <div className="grid w-4/5 max-w-[650px] auto-rows-max grid-cols-1 grid-rows-6 justify-items-center gap-y-4 tp:max-w-[1000px] tp:gap-y-8">
        {purchases?.reverse().map((product) => (
          <PurchaseCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PurchasesPage;
