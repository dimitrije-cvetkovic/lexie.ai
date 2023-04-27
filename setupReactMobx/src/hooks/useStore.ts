import { StoreContext } from '@/providers/contexts'
import { IStore } from '@/types/providers';
import { useContext } from 'react';

export function useStore(): IStore {
  const context = useContext(StoreContext);

  if (context === undefined) {
    throw new Error("useStore must be used within StoreProvider");
  }

  return context!;
}