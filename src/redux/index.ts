import { combineReducers } from "redux";
import { loadState } from "../helpers/localStorageHelpers";

const ADD_ITEM = "cart/addItem";
const INCREASE_ITEM = "cart/increaseItem";
const DECREASE_ITEM = "cart/decreaseItem";

export interface ICartItem {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

interface ICartState {
  items: ICartItem[];
  totalAmount: number;
}

// Types
interface IAddItem {
  type: typeof ADD_ITEM;
  payload: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
}

interface IIncreaseItem {
  type: typeof INCREASE_ITEM;
  payload: {
    id: string;
  };
}

interface IDecreaseItem {
  type: typeof DECREASE_ITEM;
  payload: {
    id: string;
  };
}

const initialValue: ICartState = {
  items: [],
  totalAmount: 0,
};

export type CartActionTypes = IAddItem | IIncreaseItem | IDecreaseItem;

// Actions
export const addCart = (
  id: string,
  price: number,
  name: string,
  image: string,
): IAddItem => {
  return {
    type: ADD_ITEM,
    payload: {
      id: id,
      price: price,
      name: name,
      image: image,
    },
  };
};

export const increaseItem = (id: string): IIncreaseItem => {
  return {
    type: INCREASE_ITEM,
    payload: {
      id: id,
    },
  };
};

export const decreaseItem = (id: string): IDecreaseItem => {
  return {
    type: DECREASE_ITEM,
    payload: {
      id: id,
    },
  };
};

const cartReducer = (
  state: ICartState = initialValue,
  action: CartActionTypes,
): ICartState => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === newItem.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  total: item.total + newItem.price,
                }
              : item,
          ),
          totalAmount: state.totalAmount + newItem.price,
        };
      } else {
        return {
          ...state,
          items: [
            ...state.items,
            {
              ...newItem,
              quantity: 1,
              total: newItem.price,
            },
          ],
          totalAmount: state.totalAmount + newItem.price,
        };
      }

    case INCREASE_ITEM: {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  total: item.total + item.price,
                }
              : item,
          ),
          totalAmount: (state.totalAmount += existingItem.price),
        };
      } else {
        return { ...state };
      }
    }

    case DECREASE_ITEM: {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem?.quantity === 1) {
        return { ...state };
      }
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                  total: item.total - item.price,
                }
              : item,
          ),
          totalAmount: (state.totalAmount -= existingItem.price),
        };
      } else {
        return { ...state };
      }
    }
    default:
      return state;
  }
};

const persistedState = loadState();

const rootReducer = combineReducers({
  cart: cartReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
