import { PatientsContext } from '@/providers/contexts';
import { IPatientsService } from '@/types/providers';
import { useContext } from 'react';

export function usePatientsService(): IPatientsService {
  const context = useContext(PatientsContext);

  if (context === undefined) {
    throw new Error("usePatients must be used within PatientsProvider");
  }

  return context!;
}