import Image from "next/image";
import searchBoxStyles from "../Header/styles/searchBox.module.css";
import MagnifyingGlass from "../../../public/assets/icons/MagnifyingGlass.svg";
interface Props {}

const HeaderSearchBox = ({}: Props) => {
  return (
    <>
      <div className={`h-14 relative ${searchBoxStyles.headerSearchbox}`}>
        <input className="border border-gray-100 rounded-md w-full py-4 px-5" placeholder="search in products..."/>
        <Image src={MagnifyingGlass} height={20} width={20} alt='icon' className="absolute top-5 right-5"></Image>
      </div>
    </>
  );
};

export default HeaderSearchBox;
