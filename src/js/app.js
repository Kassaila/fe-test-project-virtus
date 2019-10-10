// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.
import sidebar from './modules/sidebar';
import statisticChart from './modules/statistic-chart';

(($) => {
  // When DOM is ready
  $(() => {
    sidebar.init();
    statisticChart.init();
  });
})(jQuery);
