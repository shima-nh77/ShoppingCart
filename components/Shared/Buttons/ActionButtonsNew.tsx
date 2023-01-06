import addIcon from "../../../src/icons/add.svg";
type Props = {
  className?: string;
};
const ActionButtonsNew = ({ className }: Props) => {
  return (
    <>
      <div
        className={`${className} absolute bottom-8 right-4  border border-black rounded-full cursor-pointer w-5 h-5 leading-5 text-center`}
      >
        <button>+</button>
      </div>
    </>
  );
};

export default ActionButtonsNew;
