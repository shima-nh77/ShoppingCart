import SimpleButton from "../Buttons/SimpleButton";

const DesktopHeader = () => {
  return (
    <div className="bg-white shadow-sm">
      <div className="main-container flex justify-between items-center py-2">
        <SimpleButton className="bg-gray-50 border px-5 rounded-md h-[54px]">
          <p>Login / Sign In</p>
        </SimpleButton>
      </div>
    </div>
  );
};
export default DesktopHeader;
