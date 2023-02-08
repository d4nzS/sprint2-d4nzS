import { Status } from '../models/book';

function createDayMonthDateFormat(timestamp: number): string {
    const dateArr = new Date(timestamp).toISOString().split('-');

    return `${dateArr[2].substr(0, 2)}.${dateArr[1]}`;
}

function createBtnText(status: Status, borrowedTill?: number): string {
    let buttonText: string;

    switch (status) {
        case Status.Ordered:
            buttonText = 'Забронирована';
            break;

        case Status.Borrowed:
            buttonText = `Занята до ${createDayMonthDateFormat(borrowedTill!)}`;
            break;

        default:
            buttonText = 'Забронировать';
            break;
    }

    return buttonText;
}

export default createBtnText;
