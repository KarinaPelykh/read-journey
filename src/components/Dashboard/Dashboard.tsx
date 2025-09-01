import { useLocation } from 'react-router-dom';
import { DivDashboard } from './Dashboard.styled';
import { FilterOnRecommendedPage } from '../FilterOnRecommendedPage';
import { MyLibraryDashboard } from '../MyLibraryDashboard';
import { AddReading } from '../AddReading/AddReading';
import { ShowMyInform } from '../ShowMyInform/ShowMyInform';

export const Dashboard = () => {
  const location = useLocation();

  const isLibraryPage = location.pathname === '/library';

  const isReadingPage = location.pathname === '/reading';

  return (
    <DivDashboard>
      {isReadingPage ? (
        <>
          <AddReading />
          <ShowMyInform />
        </>
      ) : !isLibraryPage ? (
        <FilterOnRecommendedPage />
      ) : (
        <MyLibraryDashboard />
      )}
    </DivDashboard>
  );
};
