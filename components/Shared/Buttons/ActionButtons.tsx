import Image from "next/image";
import { useDispatch } from "react-redux";
import addIconSvg from "../../../public/assets/icons/add.svg";
import { addItem } from "../../../Redux/cart/cartActions";

type Props = {
  className?: string;
  productData: any;
};
const ActionButtons = ({ className, productData }: Props) => {
  const dispatch = useDispatch();
  const handleAddToCart = (e: any) => {
    e.preventDefault();
    dispatch(addItem(productData));
  };
  return (
    <>
      <div className={`${className}`}>
        <button
          className="border absolute bottom-8 right-4 rounded-full cursor-pointer w-20 h-8 leading-5 text-center flex flex-row justify-center items-center"
          style={{ borderColor: "rgb(10, 173, 10)" }}
          onClick={(e) => handleAddToCart(e)}
        >
          <Image
            src={addIconSvg}
            width={26}
            height={26}
            alt="addSvg"
            className="relative"
          ></Image>
          <p className="font-medium font-sans">Add</p>
        </button>
      </div>
    </>
  );
};

export default ActionButtons;
