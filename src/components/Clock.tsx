export const Clock = () => {
  return (
    <div className="flex gap-[1.19rem] items-end mb-[-0.5rem]">
      {/* Day  */}
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium">Days</span>
        <h3 className="text-[2rem] font-bold font-inter">03</h3>
      </div>
      <span className="text-4xl text-hover_button mb-[0.625rem]">:</span>

      {/* Hour  */}
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium">Hours</span>
        <h3 className="text-[2rem] font-bold font-inter">23</h3>
      </div>
      <span className="text-4xl text-hover_button mb-[0.625rem]">:</span>

      {/* Minute  */}
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium">Minutes</span>
        <h3 className="text-[2rem] font-bold font-inter">19</h3>
      </div>
      <span className="text-4xl text-hover_button mb-[0.625rem]">:</span>

      {/* Second  */}
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium">Seconds</span>
        <h3 className="text-[2rem] font-bold font-inter">56</h3>
      </div>
    </div>
  );
};
