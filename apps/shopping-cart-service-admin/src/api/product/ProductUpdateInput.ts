import { CartItemUpdateManyWithoutProductsInput } from "./CartItemUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  cartItems?: CartItemUpdateManyWithoutProductsInput;
  description?: string | null;
  name?: string | null;
  price?: number | null;
  stock?: number | null;
};
