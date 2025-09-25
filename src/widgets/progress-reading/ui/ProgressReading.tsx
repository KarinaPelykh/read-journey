import { useState } from 'react';

import { redBookSelector } from '@/redux/books/selectors';
import { Div, Text, Wrapper } from './ProgressReading.styled';
import { useAppSelector } from '@/shared/hooks/hooks';

import { ProgressOnboarding } from './progress-onboarding/ProgressOnboarding';
import { ReadingProgressJournal } from '@/widgets/reading-progress-journal/ui/ReadingProgressJournal/ReadingProgressJournal';
import { SwitcherBtnStatistic } from './switcher-btns-statistic/SwitcherBtnStatistic';
import { Statistic } from '@/widgets/statistics/ui/Statistic';

export const ProgressReading = () => {
  const [open, setOpen] = useState({ statistic: false, details: true });

  const redBook = useAppSelector(redBookSelector);

  return (
    <Wrapper>
      {redBook.progress[0]?.status === 'inactive' ? (
        <>
          <Div>
            <Text> {open.details ? 'Diary' : 'Statistic'} </Text>
            <SwitcherBtnStatistic open={open} setOpen={setOpen} />
          </Div>
          {open.details && <ReadingProgressJournal />}
          {open.statistic && <Statistic />}
        </>
      ) : (
        <ProgressOnboarding />
      )}
    </Wrapper>
  );
};
