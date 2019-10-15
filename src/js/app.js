// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.
import sidebar from './modules/sidebar';
import statisticChart from './modules/statistic-chart';
import salesChart from './modules/sales-chart';
import customSelect from './modules/custom-select';
import datePicker from './modules/date-picker';
import customscrollInbox from './modules/customscroll-inbox';
import customscrollProjects from './modules/customscroll-projects';

(($) => {
  // When DOM is ready
  $(() => {
    sidebar.init();
    statisticChart.init();
    salesChart.init();
    customSelect.init();
    datePicker.init();
    customscrollInbox.init();
    customscrollProjects.init();
  });
})(jQuery);
