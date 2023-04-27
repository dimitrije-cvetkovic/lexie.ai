import { StoreContext } from "@/providers/contexts";
import { RootStore } from "@/stores/rootStore";
import { ReactNode } from "react";

export function StoreProvider({ children }: { children: ReactNode }) {
  const store = new RootStore();

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
