import Image from "next/image";
import addIconSvg from "../../../public/assets/icons/add.svg";
import SimpleButton from "./SimpleButton";

type Props = {
  className?: string;
};
const ActionButtons = ({ className }: Props) => {
  return (
    <>
      <div className={`${className}`}>
        <SimpleButton
          className="border absolute bottom-8 right-4 rounded-full cursor-pointer w-20 h-8 leading-5 text-center flex flex-row justify-center items-center"
          style={{ borderColor: "rgb(10, 173, 10)" }}
        >
          <Image
            src={addIconSvg}
            width={26}
            height={26}
            alt="BasketSvg"
            className="relative"
          ></Image>
          <p className="font-medium font-sans">Add</p>
        </SimpleButton>
      </div>
    </>
  );
};

export default ActionButtons;
