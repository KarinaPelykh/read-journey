import { useState } from 'react';

import { redBookSelector } from '@/redux/books/selectors';
import { Div, Text, Wrapper } from './ProgressReading.styled';
import { useAppSelector } from '@/shared/hooks/hooks';

import { ProgressOnboarding } from './progress-onboarding/ProgressOnboarding';
import { Icon } from '@/shared/ui/svg/Svg';
import { Details } from '@/components/Details/Details';
import { Statistic } from '@/components/Statistic/ui/Statistic';

export const ProgressReading = () => {
  const [open, setOpen] = useState({ statistic: false, details: true });

  const redBook = useAppSelector(redBookSelector);

  return (
    <Wrapper>
      {redBook.progress[0]?.status === 'inactive' ? (
        <>
          <Div>
            <Text> {open.details ? 'Diary' : 'Statistic'} </Text>
            <div>
              <button
                onClick={() => setOpen({ statistic: false, details: true })}
              >
                <Icon
                  iconName="watches"
                  variant="watches"
                  style={{ stroke: open.details ? '#f9f9f9' : '#686868' }}
                />
              </button>
              <button
                onClick={() => setOpen({ statistic: true, details: false })}
              >
                <Icon
                  iconName="icon-pie-chart"
                  variant="icon-pie-chart"
                  style={{ stroke: open.statistic ? '#f9f9f9' : '#686868' }}
                />
              </button>
            </div>
          </Div>
          {open.details && <Details />}
          {open.statistic && <Statistic />}
        </>
      ) : (
        <ProgressOnboarding />
      )}
    </Wrapper>
  );
};
