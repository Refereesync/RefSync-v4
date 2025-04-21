// context/RoleContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

type RoleType = 'REFEREE' | 'AR1' | 'AR2' | 'FOURTH' | 'ASSESSOR';

interface RoleContextType {
  role: RoleType;
  setRole: (role: RoleType) => void;
  canPerformAction: boolean;
  isViewerOnly: boolean;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export const RoleProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<RoleType>('REFEREE');

  const canPerformAction = !['ASSESSOR'].includes(role);
  const isViewerOnly = role === 'ASSESSOR';

  return (
    <RoleContext.Provider value={{ role, setRole, canPerformAction, isViewerOnly }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = (): RoleContextType => {
  const context = useContext<any>(RoleContext);
  if (!context) throw new Error('useRole must be used within RoleProvider');
  return context;
};
