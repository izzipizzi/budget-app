const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };

  return new Date(date).toLocaleDateString('en-US', options);
};

const formatMonthYear = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

const formatCardBalance = (number: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
};

const calculatePercentage = (partial: number, total: number): number => {
  if (total === 0) {
    return 0;
  }

  return Number(((partial / total) * 100).toFixed(2));
};

export { formatDate, formatMonthYear, formatCardBalance, calculatePercentage };