import { Weenie } from "./Weenie";

export interface RootState {
  activeTab: string;
  weenie: Weenie;
  drafts: Weenie[];
}
