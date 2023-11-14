const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };

  return new Date(date).toLocaleDateString('en-US', options);
};

export { formatDate };