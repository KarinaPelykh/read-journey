import { ReactNode } from 'react';
import { DivDashboard } from './Dashboard.styled';

export const Dashboard = ({ children }: { children: ReactNode }) => {
  return <DivDashboard>{children}</DivDashboard>;
};
