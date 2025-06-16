import { ShoppingCart } from "@phosphor-icons/react";
import LandingSection from "./landing-section";
import { Link } from "react-router";
import { useCartStore } from "../store/cart-store";

const Header = () => {

  const items = useCartStore((state) => state.items);
  const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-[#141414] p-4 rounded-b-md  ">
      <div className="flex justify-between border-[#454545] border-b-2 pb-3 mb-10 items-center m-auto">
        <p className="text-[#FFFFFF]">audiophile</p>
        <div className="flex gap-4  text-bold text-sm cursor-pointer text-[#FFFFFF] ">
          <p className="hover:text-[#D87D4A] ">HOME</p>
          <p className="hover:text-[#D87D4A] ">HEADPHONES</p>
          <p className="hover:text-[#D87D4A] ">SPEAKERS</p>
          <p className="hover:text-[#D87D4A] ">EARPHONES</p>
        </div>
        <ShoppingCart size={20} className="cursor-pointer text-[#FFFFFF]" />
      </div>
      <LandingSection />
       <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Shop
        </Link>

        <Link to="/cart" className="relative">
          🛒
          {totalQty > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalQty}
            </span>
          )}
        </Link>
      </div>
    </header>
    </div>
  );
};

export default Header;
