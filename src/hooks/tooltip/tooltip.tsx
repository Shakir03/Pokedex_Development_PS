import React, { Ref } from 'react';
import { forwardRef } from 'react';
import { Whisper, Popover } from 'rsuite';

// Define the types for DefaultPopover props
interface DefaultPopoverProps {
  content: React.ReactNode;
  className?: string;
  [key: string]: any; // Allow additional props
}

interface AppTooltipProps {
  placement: 'top' | 'bottom' | 'left' | 'right'; // Specify possible placements
  data: string;
  className?: string;
  name: string;
  tooltipClass?: string;
  appearance?: string;
}

// eslint-disable-next-line react/display-name
const DefaultPopover = forwardRef<HTMLElement, DefaultPopoverProps>(({ content, className, ...props }, ref) => {
  return (
    <Popover ref={ref as Ref<HTMLDivElement>} {...props} className={className} arrow={false}>
      <p>{content}</p>
    </Popover>
  );
});
const AppTooltip: React.FC<AppTooltipProps> = ({ placement, data, className, name, tooltipClass, appearance }) => {
  return (
    <Whisper trigger="click" placement={placement} controlId={`control-id-${placement}`} speaker={<DefaultPopover content={data} className={tooltipClass} />}>
      <div className={className}>{name}</div>
    </Whisper>
  );
};

export default AppTooltip;
