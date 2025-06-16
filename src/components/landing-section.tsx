import ProductButton from "./productButton";

const LandingSection = () => {
  return (
    <div className="flex gap-96 m-40 items-center">
      <div className="flex flex-col ">
        <p className="text-[#808080] mb-4">NEW PRODUCT</p>
        <h1 className="text-[#FFFFFF] w-50 text-3xl text-bold  mb-4">
          XX99 MARK II HEADPHONES
        </h1>
        <p className="text-[#C4C4C4] w-90  mb-4">
          Experience natural, lifelike audio and exceptional built quality made
          for the passionate music enthusiast
        </p>
        <ProductButton />
      </div>
      <img className="w-xl h-auto" src="/Bitmap.png" alt="headphones" />
    </div>
  );
};

export default LandingSection;
