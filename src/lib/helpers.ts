import { ScheduleDataType } from '@src/types/store/scheduleStoreType';
import moment from 'moment';

export const convertDateMoment = (
  dateString: Date | undefined | string,
  format: string = 'YYYY-MM-DD'
) => moment(dateString).format(format);

export const createSlug = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-\s]/g, '-')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '');

export const generateTitleSchedule = (
  startDate: ScheduleDataType['start'],
  endDate: ScheduleDataType['end']
) => {
  return `${convertDateMoment(startDate, 'DD MMM')} - ${convertDateMoment(endDate, 'DD MMM')}`;
};

// Get start of the current day
export const startOfDay = (date: Date | undefined | string) =>
  moment(date).startOf('day').format('YYYY-MM-DD HH:mm:ss');

// Get end of the current day
export const endOfDay = (date: Date | undefined | string) =>
  moment(date).endOf('day').format('YYYY-MM-DD HH:mm:ss');
