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
  const { ddMMyyy, current } = formatDate(date);

  const currentDate = new Date().toDateString();

  const isCurrentDate = currentDate === current ? '#f9f9f9' : '#686868';

  return (
    <li key={date}>
      <WrapperMain>
        <Icon
          iconName="block"
          variant="block"
          style={{ fill: isCurrentDate }}
        />
        <Data style={{ color: isCurrentDate }}>{ddMMyyy}</Data>
        <Pages>
          {readPage}
          <span> pages</span>
        </Pages>
      </WrapperMain>
      {children}
    </li>
  );
};
