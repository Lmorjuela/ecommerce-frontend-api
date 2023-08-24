import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed z-10 flex w-full bg-white tp:col-start-1 tp:col-end-7 tp:row-start-1 tp:row-end-2 tp:border-2">
      <nav className="flex w-full justify-between">
        <ul className="flex">
          <li className="w-16 mm:w-20">
            <Link to={"/"}>
              <img
                className="h-full w-full object-contain"
                src="/pictures/png/icon-ecommerce.png"
              />
            </Link>
          </li>
        </ul>
        <ul className="mr-2 flex items-center justify-center gap-6 text-4xl text-gray-400 mm:gap-12 mm:text-5xl mg:gap-24 tp:gap-0">
          <li className="cursor-pointer tp:flex tp:h-full tp:place-items-center tp:border-l-2 tp:px-20">
            <Link to={"/register"}>
              <i className="bx bx-user-plus"></i>
            </Link>
          </li>
          <li className="cursor-pointer tp:flex tp:h-full tp:place-items-center tp:border-l-2 tp:px-20">
            <Link to={"/login"}>
              <i className="bx bxs-user-detail"></i>
            </Link>
          </li>
          <li className="cursor-pointer tp:flex tp:h-full tp:place-items-center tp:border-l-2 tp:px-20">
            <Link to={"/purchases"}>
              <i className="bx bx-box"></i>
            </Link>
          </li>
          <li className="cursor-pointer tp:flex tp:h-full tp:place-items-center tp:border-l-2 tp:px-20">
            <Link to={"/cart"}>
              <i className="bx bx-cart"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
