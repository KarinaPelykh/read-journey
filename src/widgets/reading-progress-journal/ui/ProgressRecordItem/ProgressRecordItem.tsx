import formatDate from '@/helpers/formatDate';
import { Icon } from '@/shared/ui/svg/Svg';
import { Data, Pages, WrapperMain } from './ProgressRecordItem.style';
import { ReactNode } from 'react';

type ProgressRecordItemProps = {
  pagesReadCount: number;
  data: any;
  children: ReactNode;
};

export const ProgressRecordItem = ({
  pagesReadCount,
  data,
  children,
}: ProgressRecordItemProps) => {
  return (
    <li key={data}>
      <WrapperMain>
        <Icon iconName="block" variant="block" />

        <Data>{formatDate(data)}</Data>
        <Pages>
          {pagesReadCount}
          pages
        </Pages>
      </WrapperMain>
      {children}
    </li>
  );
};
