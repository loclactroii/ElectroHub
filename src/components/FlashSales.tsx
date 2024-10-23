import { Arrows } from "./Arrows";
import { Clock } from "./Clock";
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
      <div className="flex mt-10 justify-between">
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
        <Product
          title="HAVIT HV-G92 Gamepad"
          rate={40}
          image="/product.png"
          price={120}
          rating={5}
          remaining={88}
        />
      </div>
    </div>
  );
};
