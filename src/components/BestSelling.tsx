import React from "react";
import { Title } from "./Title";
import { Arrows } from "./Arrows";
import { Button } from "./PrimaryButton";
import { Product } from "./Product";

export const BestSelling = () => {
  return (
    <div>
      <div className="flex gap-[5.44rem] relative">
        <Title type="This Month" title="Best Selling Products" />
        <div className="absolute right-0 bottom-0">
          <Button content="View All" background="red" />
        </div>
      </div>
      <div className="mt-10 flex flex-wrap justify-between">
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
