import { CartItemCreateNestedManyWithoutProductsInput } from "./CartItemCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  cartItems?: CartItemCreateNestedManyWithoutProductsInput;
  description?: string | null;
  name?: string | null;
  price?: number | null;
  stock?: number | null;
};
