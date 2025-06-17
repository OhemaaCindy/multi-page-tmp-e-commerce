const Speakersection = () => {
  return (
    <div className="bg-[#D87D4A] flex gap-70 justify-center items-center pt-25 w-fit h-72 bg-[url('/rings.png')] bg-contain bg-no-repeat bg-center mb-20 pb-15 mx-auto px-10 rounded-md">
      <img src="/speaker.png" alt="speaker" className="w-60" />
      <div>
        <h1 className="text-[#FFFFFF] w-20 text-3xl text-bold  mb-4  ">
          ZX9 SPEAKER
        </h1>
        <p className="text-[#ffffff] w-70 gap-1  mb-4">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable cound
        </p>
        <button className="text-[#FFFFFF] bg-[#000000] p-2 text-sm cursor-pointer">
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
};

export default Speakersection;
