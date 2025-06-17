import { useCartStore } from "../store/cartStore";
import LandingSection from "./landing-section";
import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  const items = useCartStore((state) => state.items);
  const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-[#141414] p-4 rounded-b-md  ">
      <div className="container  flex justify-between items-center  pb-4">
        <p className="text-[#FFFFFF] text-2xl font-bold mx-40">audiophile</p>
        <div className="flex gap-10  text-bold text-sm cursor-pointer text-[#FFFFFF] items-center ">
          <Link to="" className="hover:text-[#D87D4A] ">
            HOME
          </Link>
          <Link to="" className="hover:text-[#D87D4A] ">
            HEADPHONES
          </Link>
          <Link to="" className="hover:text-[#D87D4A] ">
            SPEAKERS
          </Link>
          <Link to="" className="hover:text-[#D87D4A] ">
            EARPHONES
          </Link>
        </div>
        <ShoppingCart className="text-[#FFFFFF] cursor-pointer" />
      </div>
      <LandingSection />
      <header className="bg-white shadow-sm sticky top-0 z-50">
        {/* <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
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
        </div> */}
      </header>
    </div>
  );
};

export default Header;
