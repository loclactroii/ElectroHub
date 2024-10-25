import { Arrows } from "./Arrows";
import { Hr } from "./Hr";
import { Button } from "./PrimaryButton";
import { Products } from "./Products";
import { Title } from "./Title";

export const OurProducts = () => {
  return (
    <div className="mt-36">
      {/* Head  */}
      <div className="flex gap-[5.44rem] relative">
        <Title type="Our Products" title="Explore Our Products" />
        <Arrows />
      </div>

      {/* Products  */}
      <Products />

      <div className="mt-[3.75rem] text-center">
        <Button content="View All Products" background="red" />
      </div>
      <Hr />
    </div>
  );
};
