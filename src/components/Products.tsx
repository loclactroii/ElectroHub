import { Product } from "./Product";

export const Products = () => {
  return (
    <div className="mt-4 flex flex-wrap justify-between">
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
  );
};
