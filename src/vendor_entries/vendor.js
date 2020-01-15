// All imports in this file will be compiled into vendors.js file.
//
// For import ES6+ with transpiling to ES5, put sources into 'es6' array
module.exports = {
  es5: [
    './node_modules/jquery/dist/jquery.js',
    './node_modules/echarts/dist/echarts.common.min.js',
    './node_modules/air-datepicker/dist/js/datepicker.min.js',
    './node_modules/perfect-scrollbar/dist/perfect-scrollbar.min.js',
    './node_modules/@shopify/draggable/lib/es5/draggable.bundle.js'
  ],
  es6: [
    // './node_modules/your-plugin/es6/your-plugin.js',
  ]
};
