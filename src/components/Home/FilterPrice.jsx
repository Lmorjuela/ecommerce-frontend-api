import { useState } from "react";
import { useForm } from "react-hook-form";

const FilterPrice = ({ setPriceMinMax }) => {
  const [rotateArrow, setRotateArrow] = useState("rotate-0");
  const [hiddenSectionFilter, setHiddenSectionFilter] = useState("max-h-max");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const min = data.from.trim() === "" ? 0 : +data.from;
    const max = data.to.trim() === "" ? Infinity : +data.to;
    setPriceMinMax({ min, max });
  };

  const handleHiddenPrice = () => {
    if (rotateArrow === "rotate-180") {
      setRotateArrow("rotate-0");
      setHiddenSectionFilter("animate-slide-in");
    } else {
      setRotateArrow("rotate-180");
      setHiddenSectionFilter("animate-slide-out hidden");
    }
  };

  return (
    <article className="flex w-[90%] flex-col gap-2">
      <div
        onClick={handleHiddenPrice}
        className="flex cursor-pointer items-center justify-between text-stone-700"
      >
        <h3 className="font-serif text-2xl font-semibold">Price</h3>
        <i
          className={`bx bx-chevron-down text-4xl ${rotateArrow} transition-transform duration-500`}
        ></i>
      </div>
      <div className="h-[1px] w-full bg-gray-300"></div>
      <form
        className={`w-[95%] flex-col gap-4 self-end overflow-hidden bg-white ${hiddenSectionFilter} flex`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center justify-between text-stone-950 ">
          <label htmlFor="from">From</label>
          <input
            {...register("from")}
            className="border-[1px] border-solid p-2 text-black outline-none focus:shadow-md"
            type="number"
            id="from"
          />
        </div>
        <div className="flex items-center justify-between text-stone-950">
          <label htmlFor="to">To</label>
          <input
            {...register("to")}
            className="border-[1px] border-solid p-2 text-black outline-none focus:shadow-md"
            type="number"
            id="to"
          />
        </div>
        <button className="self-end rounded-lg bg-red-600 px-4 py-2  text-xl text-white opacity-80 brightness-105 mm:mb-8">
          Filter Price
        </button>
      </form>
    </article>
  );
};

export default FilterPrice;
