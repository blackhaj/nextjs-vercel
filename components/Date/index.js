import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time className="text-base text-gray-500 mb-2" dateTime={dateString}>
      {format(date, 'd LLLL yyyy')}
    </time>
  );
}
