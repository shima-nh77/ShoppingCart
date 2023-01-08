import HeaderBasketbutton from "./HeaderBasketButton";
import HeaderLoginButton from "./HeaderLoginButton";
import HeaderSearchBox from "./HeaderSearchBox";

const DesktopHeader = () => {
  return (
    <div className="bg-white shadow-sm border-b border-grey-200">
      <div className="main-container flex justify-between items-center py-2">
        <HeaderLoginButton />
        <HeaderSearchBox />
        <HeaderBasketbutton />
      </div>
    </div>
  );
};
export default DesktopHeader;
