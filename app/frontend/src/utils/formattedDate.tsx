import React from 'react';
import { parseISO, format } from 'date-fns';

export type DateProps = {
    dateString: string;
};

export default function FormattedDate({ dateString }: DateProps): JSX.Element {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
