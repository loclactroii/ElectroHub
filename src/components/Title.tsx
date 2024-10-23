interface Title {
  title: string;
  type: string;
}

export const Title = ({ title, type }: Title): JSX.Element => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <div className="w-5 h-10  bg-secondary_2 rounded"></div>
        <span className="font-semibold text-secondary_2 font-poppins">
          {type}
        </span>
      </div>
      <h2 className="mt-6 font-inter text-4xl font-semibold">{title}</h2>
    </div>
  );
};
