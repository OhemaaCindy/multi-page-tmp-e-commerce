import { ChevronRight } from "lucide-react";

const items = [
  {
    id: 1,
    img: "/headPhone.png",
    text: "HEADPHONES",
    actionText: "SHOP",
    icon: <ChevronRight size={20} />,
  },
  {
    id: 2,

    img: "/speaker.png",
    text: "SPEAKERS",
    actionText: "SHOP",
    icon: <ChevronRight size={20} />,
  },
  {
    id: 3,

    img: "/earPhones.png",
    text: "EARPHONES",
    actionText: "SHOP",
    icon: <ChevronRight size={20} />,
  },
];

const ItemsSection = () => {
  return (
    <div className="flex gap-20 justify-center items-center">
      {items.map((item) => (
        <div
          className=" flex flex-col mt-20 mb-30 items-center bg-[#F1F1F1] py-4 w-60 "
          key={item.id}
        >
          <img src={item.img} className="w-25 h-" />
          <p className="font-bold">{item.text}</p>
          <div className="flex gap-2 items-center">
            <p className="text-[#979797]  text-sm ">{item.actionText}</p>

            <p className="text-[#D87D4A]">{item.icon}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsSection;
