import { ProgressBar } from 'react-loader-spinner';
import { Div } from './Loader.styled';

export const Loader = () => {
  return (
    <Div>
      <ProgressBar
        visible={true}
        height="100"
        width="100"
        // color="#4fa94d"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        barColor="#fff"
        borderColor="#686868"
      />
    </Div>
  );
};
