import { useParams } from "react-router-dom";
import {
  DeliveryIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
  ReturnIcon,
} from "../components/Icons";
import { Button } from "../components/PrimaryButton";
import { Products } from "../components/Products";
import { Rating } from "../components/Rating";
import { Title } from "../components/Title";
import { useStore } from "../hooks/useStore";
import { useEffect, useRef, useState } from "react";
import { IProduct } from "../interfaces/interfaces";

export const ProductDetail = () => {
  const { productsData } = useStore();
  const { productId } = useParams();
  const [data, setData] = useState<IProduct>();
  const [amount, setAmount] = useState<number>(1);
  const [size, setSize] = useState<string>("M");
  const mainImageRef: HTMLImageElement = useRef(null);

  useEffect(() => {
    const thisProduct = productsData.find(
      (product) => product.id === productId,
    );
    if (thisProduct) {
      setData(thisProduct);
    }
  }, [productId]);

  console.log(size);

  return (
    <div>
      <div className="mb-20 mt-20 flex items-center gap-3">
        <span className="text-sm opacity-50">Account</span>
        <span className="text-sm opacity-50">/</span>
        <span className="text-sm opacity-50">Gaming</span>
        <span className="text-sm opacity-50">/</span>
        <span>{data?.name}</span>
      </div>
      <div className="mt-20 flex">
        {/* Left content  */}
        <div className="flex max-w-[10.625rem] flex-col justify-between gap-4">
          <div className="flex h-[8.625rem] cursor-pointer items-center justify-center rounded bg-secondary p-2">
            <img
              src={data?.subImage_1}
              className="w-full object-cover"
              alt=""
              onClick={() => (mainImageRef.current.src = data?.subImage_1)}
            />
          </div>
          <div className="flex h-[8.625rem] cursor-pointer items-center justify-center rounded bg-secondary p-2">
            <img
              src={data?.subImage_2}
              className="w-full object-cover"
              alt=""
              onClick={() => (mainImageRef.current.src = data?.subImage_2)}
            />
          </div>
          <div className="flex h-[8.625rem] cursor-pointer items-center justify-center rounded bg-secondary p-2">
            <img
              src={data?.subImage_3}
              className="w-full object-cover"
              alt=""
              onClick={() => (mainImageRef.current.src = data?.subImage_3)}
            />
          </div>
          <div className="flex h-[8.625rem] cursor-pointer items-center justify-center rounded bg-secondary p-2">
            <img
              src={data?.subImage_4}
              className="w-full object-cover"
              alt=""
              onClick={() => (mainImageRef.current.src = data?.subImage_4)}
            />
          </div>
        </div>
        {/* Middle content  */}
        <div className="ml-[1.875rem] flex w-[31.25rem] items-center justify-center bg-secondary mix-blend-darken">
          <img
            ref={mainImageRef}
            src={data?.mainImage}
            className="w-full object-cover"
            alt=""
          />
        </div>

        {/* Right content  */}
        <div className="max-w-[25rem] translate-x-16">
          {/* Top  */}
          <h1 className="font-inter text-2xl font-semibold">{data?.name}</h1>
          <div className="mb-4 mt-4 flex items-center">
            <Rating rating={4} reviews={150} />
            <span className="ml-4 mr-4 h-4 w-[1px] bg-black opacity-50"></span>
            <span className="text-sm text-button_1">In Stock</span>
          </div>
          <h2 className="font-inter text-2xl">${data?.price}</h2>
          <p className="mt-6 text-sm">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <hr className="mb-6 mt-6 h-[2px] w-full bg-black" />
          {/* Color  */}
          <div className="flex items-center">
            <span>Colors:</span>
            <div className="ml-6 flex gap-2">
              <div className="color-active flex h-5 w-5 items-center justify-center rounded-full bg-white">
                <div className="h-full w-full cursor-pointer rounded-full bg-[#A0BCE0]"></div>
              </div>
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
                <div className="h-full w-full cursor-pointer rounded-full bg-secondary_2"></div>
              </div>
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
                <div className="h-full w-full cursor-pointer rounded-full bg-button_1"></div>
              </div>
            </div>
          </div>
          {/* Size  */}
          <div className="mt-6 flex">
            <span>Size:</span>
            <div className="ml-6 flex gap-4">
              {["XS", "S", "M", "L", "XL"].map(
                (type: string, index: number): JSX.Element => {
                  return (
                    <div
                      onClick={() => setSize(type)}
                      key={index}
                      className={`${size === type ? "size-active" : ""} flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-[rgba(0,0,0,0.5)]`}
                    >
                      {type}
                    </div>
                  );
                },
              )}
            </div>
          </div>
          {/* Buy Now  */}
          <div className="mt-6 flex h-11 items-center gap-4">
            <div className="flex h-full min-w-[10rem] items-center justify-between rounded border border-r-[0px] border-[rgba(0,0,0,0.5)]">
              <div
                onClick={() => setAmount(amount - 1)}
                className="cursor-pointer border-r-[1px] border-[rgba(0,0,0,0.5)] p-[0.625rem_0.5rem]"
              >
                <MinusIcon />
              </div>
              <span className="select-none text-center">{amount}</span>
              <div
                onClick={() => setAmount(amount + 1)}
                className="cursor-pointer rounded bg-secondary_2 p-[0.625rem_0.5rem]"
              >
                <PlusIcon />
              </div>
            </div>
            <div className="h-11 basis-full">
              <Button background="red" height="h-11" content="Buy Now" />
            </div>
            <div className="rounded border-2 border-[rgba(0,0,0,0.5)] p-1">
              <HeartIcon />
            </div>
          </div>

          {/* Delivery  */}
          <div className="mt-10 select-none">
            <div className="flex items-center rounded-t border border-b-[0px] border-[rgba(0,0,0,0.3)] p-[1.5rem_1rem]">
              <DeliveryIcon />
              <div className="ml-4">
                <h3 className="font-medium">Free Delivery</h3>
                <p className="text-xs font-medium">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex items-center rounded-b border border-[rgba(0,0,0,0.3)] p-[1.5rem_1rem]">
              <ReturnIcon />
              <div className="ml-4">
                <h3 className="font-medium">Return Delivery</h3>
                <p className="text-xs font-medium">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom  */}
      <div className="relative mt-[8.75rem] flex gap-[5.44rem]">
        <Title type="Related item" title="" />
      </div>
      <Products />
    </div>
  );
};
