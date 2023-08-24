import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch.js";
import { getProductsThunk } from "../../store/slice/products.slice.js";
import { useDispatch } from "react-redux";

const FilterCategory = () => {
  const BASE_URL = import.meta.env.VITE_REACT_APP_URL
  const baseUrl = BASE_URL;
  const [categories, getAllCategories] = useFetch(baseUrl);
  const dispatch = useDispatch();
  const [rotateArrow, setRotateArrow] = useState("rotate-0");
  const [hiddenSectionFilter, setHiddenSectionFilter] = useState("max-h-max");

  useEffect(() => {
    getAllCategories("/categories");
  }, []);

  const handleHiddenCategory = () => {
    if (rotateArrow === "rotate-180") {
      setRotateArrow("rotate-0");
      setHiddenSectionFilter("animate-slide-in");
    } else {
      setRotateArrow("rotate-180");
      setHiddenSectionFilter("animate-slide-out hidden");
    }
  };

  const handleFilterCategory = (id) => {
    if (id) {
      const url = `${BASE_URL}/products?categoryId=${id}`;
      dispatch(getProductsThunk(url));
    } else {
      dispatch(getProductsThunk());
    }
  };

  return (
    <article className="flex w-[90%] flex-col gap-2">
      <div
        className="flex cursor-pointer items-center justify-between text-stone-700"
        onClick={handleHiddenCategory}
      >
        <h3 className="font-serif text-2xl font-semibold">Category</h3>
        <i
          className={`bx bx-chevron-down text-4xl ${rotateArrow} transition-transform duration-500`}
        ></i>
      </div>
      <div className="h-[1px] w-full bg-gray-300"></div>
      <ul
        className={`flex w-[95%] flex-col gap-2 self-end overflow-hidden ${hiddenSectionFilter}`}
      >
        <li
          className="cursor-pointer hover:text-lg"
          onClick={() => handleFilterCategory()}
        >
          All Categories
        </li>
        {categories?.map((category) => (
          <li
            className="cursor-pointer hover:text-lg"
            onClick={() => handleFilterCategory(category.id)}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default FilterCategory;
