import React, { ReactElement, createContext, useMemo, useReducer } from "react";

export type CartItemType = {
  sku: string;
  name: string;
  price: number;
  qty: number;
};

type CartStateType = { cart: CartItemType[] };

const initCartState: CartStateType = { cart: [] };

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
};

export const ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

const reducer = (state: CartStateType, action: ReducerAction) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD:
      if (!action.payload) {
        throw new Error("payload is required for ADD action");
      }

      const { sku, name, price } = action.payload;

      const filteredItems: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );

      const existingItem: CartItemType | undefined = state.cart.find(
        (item) => item.sku === sku
      );

      const qty: number = existingItem ? existingItem.qty + 1 : 1;
      return {
        ...state,
        cart: [...filteredItems, { sku, name, price, qty }],
      };

    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error("payload is required in remove action");
      }

      let { sku } = action.payload;

      const filteredItems: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );
      return {
        ...state,
        cart: [...filteredItems, { sku }],
      };
    }
    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error("payload is required in Quantity action");
      }

      const { sku, qty } = action.payload;

      const existingItem: CartItemType | undefined = state.cart.find(
        (item) => item.sku === sku
      );

      if (!existingItem) {
        throw new Error("Item does not exist");
      }

      const updatedItem: CartItemType = {
        ...existingItem,
        qty,
      };

      const filteredItems: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );

      return {
        ...state,
        cart: [...filteredItems, updatedItem],
      };
    }
    case REDUCER_ACTION_TYPE.SUBMIT:
      return {
        ...state,
        cart: [],
      };
    default:
      throw new Error("Unknown action type");
  }
};


const useCartContext = (initCartState: CartStateType) => {
    const [state, dispatch] = useReducer(reducer, initCartState);
   
    const REDUCER_ACTIONS = useMemo(() => {
      return REDUCER_ACTION_TYPE 
    },[]);

    const totalItems = state.cart.reduce((acc: any, item: { qty: any; }): number => {
        return acc + item.qty;
    },0)

    const totalPrice = new Intl.NumberFormat("en-US",{
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,  
    } ).format(state.cart.reduce((acc: number, item: { price: number; qty: number; }) => {
        return acc + item.price * item.qty;
    },0)
    )

    const cart = state.cart.sort((a: string,b: string) => {
       const itemA = Number(a.sku.slice(-4));
       const itemB = Number(b.sku.slice(-4));
       return itemA - itemB;
    })

    return {dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart}
}



export type  useCartContextType = ReturnType<typeof useCartContext>

const initCartContextState: useCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 0,
  totalPrice: "",
  cart: [],
}

export const CartContext = createContext<useCartContextType>(initCartContextState);

type ChildrenType = {children?: ReactElement| ReactElement[]}

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return <CartContext.Provider value={useCartContext(initCartState)}>
    {children}
  </CartContext.Provider>
}