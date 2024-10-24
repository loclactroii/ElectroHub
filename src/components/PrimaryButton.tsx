interface Button {
  content: string;
  background: "red" | "green";
}

export const Button = ({ content, background }: Button): JSX.Element => {
  return (
    <>
      <button
        className={`rounded cursor-pointer text-text p-[1rem_3rem] ${background === "red" && "bg-button_2"} ${background === "green" && "bg-button_1"} font-medium font-poppins`}
      >
        {content}
      </button>
    </>
  );
};
