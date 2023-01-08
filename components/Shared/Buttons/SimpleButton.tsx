type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
};
const SimpleButton = ({ children, className, type, style }: Props) => {
  return (
    <button className={className} type={type} style={style}>
      {children && children}
    </button>
  );
};
export default SimpleButton;
