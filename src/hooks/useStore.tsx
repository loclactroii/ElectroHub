import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export const useStore = () => {
  const data = useContext(StoreContext);
  if (!data) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return data;
};
