import { useStore } from "../hooks/useStore";
import { IProduct } from "../interfaces/interfaces";
import { Product } from "./Product";

export const Products = () => {
  const { productsData } = useStore();
  return (
    <div className="mt-4 flex flex-wrap justify-between">
      {productsData.map((product: IProduct, index: number): JSX.Element => {
        const { id, name, rate, mainImage, price, rating, reviews } = product;
        return (
          <div key={index}>
            <Product
              id={id}
              name={name}
              rate={rate}
              mainImage={mainImage}
              price={price}
              rating={rating}
              reviews={reviews}
            />
          </div>
        );
      })}
    </div>
  );
};
