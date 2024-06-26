import { CategoryItem } from "./category.types";

export enum CART_ACTION_TYPES {
  SET_IS_CART_OPEN = "Scart/SET_IS_CART_OPEN",
  SET_CART_ITEMS = "cart/SET_CART_ITEMS",
  SET_CART_COUNT = "cart/SET_CART_COUNT",
  SET_CART_TOTAL = "cart/SET_CART_TOTAL",
}

export type CartItemType = CategoryItem & {
  quantity: number;
};
