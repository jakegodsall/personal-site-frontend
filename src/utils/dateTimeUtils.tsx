export function convertIsoToCustomDateFormat(isoDateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const date = new Date(isoDateString);
    return date.toLocaleDateString("en-UK", options);
}
