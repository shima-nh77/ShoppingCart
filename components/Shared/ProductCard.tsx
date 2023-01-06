import Image from "next/image";
import ActionButtonsNew from "./Buttons/ActionButtonsNew";

type Props = {
  data?: any;
};
const ProductCard = ({ data }: Props) => {
  return (
    <div className=" border-gray-100 shadow-md flex flex-col h-[370px] w-[250px] m-5 p-2 relative">
      {/* ------Image------ */}
      <img src={data?.image} alt={data?.category} className="h-52 w-60 p-2" />
      {/* ------Title------ */}
      <h3 className="text-gray-700 text-left text-sm font-medium font-sans">
        {data?.title}
      </h3>
      {/* ------Price------ */}
      <p className="text-gray-700 text-left text-base font-medium my-4 ">{`${data?.price} $`}</p>
      {/* ------AddToCartButton------ */}
      <ActionButtonsNew className="mr-1" />
    </div>
  );
};
export default ProductCard;
