'use client';

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import * as React from 'react';

import { Button } from '@components/ui/button';
import { Calendar } from '@components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@components/ui/popover';
import { cn } from '@src/lib/utils';

export interface IDatePicker {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  isDisableBackDate?: boolean;
  className?: string;
}

const DatePicker: React.FC<IDatePicker> = (props) => {
  const { date, setDate, isDisableBackDate, className } = props;
  const [openCalendar, setOpenCalendar] = React.useState<boolean>(false);

  const disableBackdate = (date: Date) =>
    date > new Date() || date < new Date('1900-01-01');

  const handleSelectedDate = (date: Date | undefined) => {
    setDate && setDate(date);
    setOpenCalendar(false);
  };
  return (
    <div
      className={cn(
        'date-picker-popover-container',
        'flex justify-between items-center text-sm font-medium text-muted-foreground',
        'cursor-not-allowed opacity-80',
        className
      )}
    >
      <Popover open={openCalendar} onOpenChange={setOpenCalendar}>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-[280px] justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 w-4 h-4" />
            {date ? format(date, 'PPP') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelectedDate}
            initialFocus
            disabled={isDisableBackDate && disableBackdate}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
export default DatePicker;
