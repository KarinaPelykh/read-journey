import { Icon } from '@/shared/ui/svg/Svg';

type SwitcherBtnStatisticProps = {
  open: { details: boolean; statistic: boolean };
  setOpen: (arg: { details: boolean; statistic: boolean }) => void;
};

export const SwitcherBtnStatistic = ({
  open,
  setOpen,
}: SwitcherBtnStatisticProps) => {
  return (
    <div>
      <button onClick={() => setOpen({ statistic: false, details: true })}>
        <Icon
          iconName="watches"
          variant="watches"
          style={{ stroke: open.details ? '#f9f9f9' : '#686868' }}
        />
      </button>
      <button onClick={() => setOpen({ statistic: true, details: false })}>
        <Icon
          iconName="icon-pie-chart"
          variant="icon-pie-chart"
          style={{ stroke: open.statistic ? '#f9f9f9' : '#686868' }}
        />
      </button>
    </div>
  );
};
