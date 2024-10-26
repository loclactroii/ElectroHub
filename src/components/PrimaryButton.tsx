interface IButton {
  content: string;
  background: "red" | "green" | "white";
  onClick?: () => void;
}

export const Button = ({ ...props }: IButton): JSX.Element => {
  const { content, background } = props;
  return (
    <>
      <button
        {...props}
        className={`${background === "white" && "border-[rgba(0, 0, 0, 0.50)] border bg-white !text-black"} cursor-pointer rounded p-[1rem_3rem] text-text ${background === "red" && "bg-button_2"} ${background === "green" && "bg-button_1"} font-poppins font-medium`}
      >
        {content}
      </button>
    </>
  );
};
