const customSelect = () => {
  const $select = $('.custom-select');

  const _stylingSelect = () => {
    $select.each(function () {
      const $this = $(this);

      $this.addClass('custom-select_hidden')
        .wrap('<div class="custom-select__wrapper"></div>')
        .after('<span class="custom-select_styled"></span>');

      const $styledSelect = $this.next('.custom-select_styled');

      $styledSelect.text($this.val());

      $this.on('mousedown', () => {
        $styledSelect.addClass('active');
      });

      $this.on('change', () => {
        $styledSelect.text($this.val());
        setTimeout(() => $styledSelect.removeClass('active'), 100);
      });
    });
  };

  const init = () => {
    if (!$select.length) return false;

    _stylingSelect();

    return true;
  };

  return {
    init,
  };
};

export default customSelect();
