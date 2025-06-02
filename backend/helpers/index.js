function parseRussianDate(dateStr) {
  try {
    const cleanStr = dateStr.replace(' г.', '').trim();

    const parts = cleanStr.split(/\s+/);

    const day = parseInt(parts[0], 10);
    const month = parts[1].toLowerCase();
    const timeParts = parts[3].split(':');
    const year = parseInt(parts[2], 10);
    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);

    const months = {
      'января': 0, 'февраля': 1, 'марта': 2, 'апреля': 3,
      'мая': 4, 'июня': 5, 'июля': 6, 'августа': 7,
      'сентября': 8, 'октября': 9, 'ноября': 10, 'декабря': 11
    };

    const monthIndex = months[month];

    return new Date(Date.UTC(year, monthIndex, day, hours, minutes));
  } catch (error) {
    console.error('Ошибка парсинга даты:', error.message, 'Исходная строка:', dateStr);
    return undefined;
  }
}

module.exports = { parseRussianDate };