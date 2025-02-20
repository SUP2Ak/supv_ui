export const formatDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const formatTime = (date: Date, withSeconds: boolean = false): string => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return withSeconds ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}`;
};

export const formatDateTime = (date: Date, withSeconds: boolean = false): string => {
  return `${formatDate(date)} - ${formatTime(date, withSeconds)}`;
};