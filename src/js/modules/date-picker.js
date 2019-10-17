const datePicker = () => {
  const $picker = $('.date-picker-block__date-picker');
  const option = {
    inline: true,
    language: {
      days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      daysMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      monthsShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      today: 'Today',
      clear: 'Clear',
      dateFormat: 'mm/dd/yyyy',
      timeFormat: 'hh:ii aa',
      firstDay: 0,
    },
  };

  const init = () => {
    if (!$picker.length) return false;

    $picker.datepicker(option);

    return true;
  };

  return {
    init,
  };
};

export default datePicker();
