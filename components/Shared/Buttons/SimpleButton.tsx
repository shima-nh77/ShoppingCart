type Props = {
  children?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
};
const SimpleButton = ({ children, className, type }: Props) => {
  return (
    <button className={className} type={type}>
      {children && children}
    </button>
  );
};
export default SimpleButton;
