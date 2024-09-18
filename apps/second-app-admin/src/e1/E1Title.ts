import { E1 as TE1 } from "../api/e1/E1";

export const E1_TITLE_FIELD = "id";

export const E1Title = (record: TE1): string => {
  return record.id?.toString() || String(record.id);
};
