import { Arrows } from "./Arrows";
import { Clock } from "./Clock";
import { Hr } from "./Hr";
import { Button } from "./PrimaryButton";
import { Product } from "./Product";
import { Title } from "./Title";

export const FlashSales = () => {
  return (
    <div className="mt-36">
      {/* Head  */}
      <div className="flex gap-[5.44rem] relative">
        <Title type="Today's" title="Flash Sales" />
        <Clock />
        <Arrows />
      </div>

      {/* Products  */}
      <div className="grid grid-cols-4 gap-[3.75rem] mt-10  justify-between">
        <Product
          title="HAVIT HV-G92 Gamepad"
          rate={40}
          image="/product.png"
          price={120}
          rating={5}
          remaining={88}
        />
        <Product
          title="HAVIT HV-G92 Gamepad"
          rate={40}
          image="/product.png"
          price={120}
          rating={5}
          remaining={88}
        />
        <Product
          title="HAVIT HV-G92 Gamepad"
          rate={40}
          image="/product.png"
          price={120}
          rating={5}
          remaining={88}
        />
        <Product
          title="HAVIT HV-G92 Gamepad"
          rate={40}
          image="/product.png"
          price={120}
          rating={5}
          remaining={88}
        />
      </div>

      <div className="mt-[3.75rem] text-center">
        <Button content="View All Products" background="red" />
      </div>
      <Hr />
    </div>
  );
};
