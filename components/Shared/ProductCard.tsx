import Image from "next/image";
import Link from "next/link";
import ActionButtonsNew from "./Buttons/ActionButtons";

type Props = {
  data?: any;
};

const ProductCard = ({ data }: Props) => {
  const url = `product/${data.id}`;
  return (
    <Link href={url}>
      <div
        className="border border-gray-100 shadow-md flex flex-col h-[350px] w-[220px] m-5 p-2 relative"
      >
        {/* ------Image------ */}
        <img src={data?.image} alt={data?.category} className="h-52 w-60 p-2" />
        {/* ------Title------ */}
        <h3 className="text-gray-700 text-left text-sm font-medium font-sans truncate">
          {data?.title}
        </h3>
        {/* ------Price------ */}
        <p className="text-gray-700 text-left text-base font-medium my-4">{`${data?.price} $`}</p>
        {/* ------AddToCartButton------ */}
        <ActionButtonsNew className="mr-1" />
      </div>
    </Link>
  );
};
export default ProductCard;
