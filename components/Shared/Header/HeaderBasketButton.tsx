import SimpleButton from "../Buttons/SimpleButton";
import BasketSvg from "../../../public/assets/icons/Cart.svg";
import Image from "next/image";

const HeaderBasketbutton = () => {
  return (
    <SimpleButton
      className=" px-5 rounded-full h-14 w-20 flex items-center justify-center"
    >
      <Image
        src={BasketSvg}
        width={25}
        height={25}
        alt="BasketSvg"
        className="relative"
      ></Image>
      <p className="bg-green-500 w-5 h-5 absolute right-14 top-4 rounded-full text-center leading-5 text-white font-medium font-sans">
        0
      </p>
    </SimpleButton>
  );
};
export default HeaderBasketbutton;
