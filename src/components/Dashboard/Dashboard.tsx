import { useLocation } from 'react-router-dom';
import { DivDashboard } from './Dashboard.styled';
import { RecommendedSidebar } from '../RecommendedSidebar';
import { MyLibrarySidebar } from '../MyLibrarySidebar';
import { AddReading } from '../AddReading/AddReading';
import { ProgressReading } from '@/widgets/progress-reading/ui/ProgressReading';

export const Dashboard = () => {
  const location = useLocation();

  const isLibraryPage = location.pathname === '/library';

  const isReadingPage = location.pathname === '/reading';

  return (
    <DivDashboard>
      {isReadingPage ? (
        <>
          <AddReading />
          <ProgressReading />
        </>
      ) : !isLibraryPage ? (
        <RecommendedSidebar />
      ) : (
        <MyLibrarySidebar />
      )}
    </DivDashboard>
  );
};
