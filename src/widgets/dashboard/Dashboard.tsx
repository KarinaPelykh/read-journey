import { ReactNode } from 'react';
import { DivDashboard } from './Dashboard.styled';

export const Dashboard = ({ children }: { children: ReactNode }) => (
  <DivDashboard>{children}</DivDashboard>
);
