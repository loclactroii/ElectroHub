interface Title {
  title: string;
  type: string;
}

export const Title = ({ title, type }: Title): JSX.Element => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="h-10 w-5 rounded bg-secondary_2"></div>
        <span className="font-poppins font-semibold text-secondary_2">
          {type}
        </span>
      </div>
      {title && (
        <h2 className="mt-6 font-inter text-4xl font-semibold">{title}</h2>
      )}
    </div>
  );
};
