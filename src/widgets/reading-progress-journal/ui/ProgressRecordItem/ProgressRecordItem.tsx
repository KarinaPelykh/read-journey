import formatDate from '@/helpers/formatDate';
import { Icon } from '@/shared/ui/svg/Svg';
import { Data, Pages, WrapperMain } from './ProgressRecordItem.style';
import { ReactNode } from 'react';

type ProgressRecordItemProps = {
  readPage: number;
  date: any;
  children?: ReactNode;
};

export const ProgressRecordItem = ({
  readPage,
  date,
  children,
}: ProgressRecordItemProps) => {
  return (
    <li key={date}>
      <WrapperMain>
        <Icon iconName="block" variant="block" />
        <Data>{formatDate(date)}</Data>
        <Pages>
          {readPage}
          <span> pages</span>
        </Pages>
      </WrapperMain>
      {children}
    </li>
  );
};
