import { E1WhereInput } from "./E1WhereInput";
import { E1OrderByInput } from "./E1OrderByInput";

export type E1FindManyArgs = {
  where?: E1WhereInput;
  orderBy?: Array<E1OrderByInput>;
  skip?: number;
  take?: number;
};
