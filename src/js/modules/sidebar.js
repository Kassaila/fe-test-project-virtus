const sidebar = () => {
  const $sidebar = $('.sidebar');
  const $btnSidebar = $('.header__btn-sidebar');
  const BTN_SIDEBAR_ACTIVE = 'header__btn-sidebar_is-active';

  const _addEventListeners = () => {
    $btnSidebar.on('click', function () {
      $sidebar.animate({ opacity: 'toggle' });
      if (!$(this).hasClass(BTN_SIDEBAR_ACTIVE)) {
        $(this).addClass(BTN_SIDEBAR_ACTIVE);
      } else {
        $(this).removeClass(BTN_SIDEBAR_ACTIVE);
      }
    });
  };

  const init = () => {
    _addEventListeners();
  };

  return {
    init,
  };
};

export default sidebar();
