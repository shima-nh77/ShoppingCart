import SimpleButton from "../Buttons/SimpleButton";

const HeaderLoginButton = () => {
  return (
    <SimpleButton
      className="bg-gray-50 border px-5 rounded-md h-14 w-24"
      style={{ backgroundColor: "rgb(10, 173, 10)" }}
    >
      <p className="text-white font-medium font-sans">Login</p>
    </SimpleButton>
  );
};
export default HeaderLoginButton;
