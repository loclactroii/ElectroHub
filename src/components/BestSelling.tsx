import { Title } from "./Title";
import { Button } from "./PrimaryButton";
import { Products } from "./Products";

export const BestSelling = () => {
  return (
    <div>
      <div className="flex gap-[5.44rem] relative">
        <Title type="This Month" title="Best Selling Products" />
        <div className="absolute right-0 bottom-0">
          <Button content="View All" background="red" />
        </div>
      </div>
      <Products />
    </div>
  );
};
