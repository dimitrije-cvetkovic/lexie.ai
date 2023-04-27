import { IStore, IPatientsService } from '@/types/providers';
import { createContext } from 'react';

export const StoreContext = createContext<IStore | null>(null);
export const PatientsContext = createContext<IPatientsService | null>(null);