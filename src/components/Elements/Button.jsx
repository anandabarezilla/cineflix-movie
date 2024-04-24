const Button = ({ children, width = "w-40" }) => {
  return <button className={`bg-secondary py-2 px-4 ${width} sm:w-32 rounded-md hover:bg-[#b42121]`}>{children}</button>;
};

export default Button;
