const Button = ({ color, ...props }) => {
  return (
    <button
      className={`min-w-8 max-w-28 rounded-md p-1.5 text-white  ${
        color === "red" && `bg-red-500`
      } ${color === "green" && `bg-green-500`} ${
        color === "yellow" && `bg-yellow-500`
      }
      } hover:opacity-95`}
      {...props}
    />
  );
};

export default Button;
