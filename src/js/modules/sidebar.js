const sidebar = () => {
  const $sidebar = $('.sidebar');
  const $btnSidebar = $('.header__btn-sidebar');
  const BTN_SIDEBAR_ACTIVE = 'header__btn-sidebar_is-active';
  const $header = $('.header');
  const $win = $(window);

  const _sidebarPosition = () => {
    $sidebar.height($win.height() - $header.outerHeight());
    $sidebar.css({ top: $header.outerHeight() });
  };

  const _addEventListeners = () => {
    $btnSidebar.on('click', function () {
      $sidebar.animate({ opacity: 'toggle' });
      if (!$(this).hasClass(BTN_SIDEBAR_ACTIVE)) {
        $(this).addClass(BTN_SIDEBAR_ACTIVE);
      } else {
        $(this).removeClass(BTN_SIDEBAR_ACTIVE);
      }
    });
    $win.on('resize', _sidebarPosition);
  };

  const init = () => {
    _addEventListeners();
    _sidebarPosition();
  };

  return {
    init,
  };
};

export default sidebar();
