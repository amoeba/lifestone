import { Weenie } from "./Weenie";

export interface RootState {
  weenie: Weenie;
  drafts: Weenie[];
}
