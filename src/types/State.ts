import { Weenie } from "./Weenie";
import { UIState } from "./UI";

export interface RootState {
  ui: UIState;
  weenie: Weenie;
  drafts: Weenie[];
}
