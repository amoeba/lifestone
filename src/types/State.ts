import { Weenie } from "./Weenie";

export interface RootState {
  activeTab: String;
  weenie: Weenie;
  drafts: Weenie[];
}
