export function getFlightDate(date: string) {
  return new Date(date).getDate()
}

export function getFlightTime(date: string) {
  const dateObject = new Date(date)
  const options = { hour: '2-digit', minute: '2-digit' } as const;
  return new Intl.DateTimeFormat('ru-RU', options).format(dateObject)
}

export function getFlightDay(date: string) {
  const dateObject = new Date(date)
  const options = { weekday: 'short' }  as const;
  return new Intl.DateTimeFormat('ru-RU', options).format(dateObject)
}

export function getFlightMonth(date: string) {
  const dateObject = new Date(date)
  const options = { month: 'short' } as const;
  return new Intl.DateTimeFormat('ru-RU', options).format(dateObject)
}

export function getFlightDurationTime(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  let result = '';

  if (hours > 0) {
    result += `${hours} ч `;
  }

  if (remainingMinutes > 0) {
    result += `${remainingMinutes} мин`;
  }

  return result.trim();
}
