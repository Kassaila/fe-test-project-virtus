const customSelect = () => {
  const $select = $('.custom-select');

  const _createWrapper = () => {
    $select.each(function () {
      const $this = $(this);
      const numberOfOptions = $(this).children('option').length;

      $this.addClass('custom-select_hidden');
      $this.wrap('<div class="custom-select__wrapper"></div>');
      $this.after('<div class="custom-select_styled"></div>');

      const $styledSelect = $this.next('div.custom-select_styled');
      $styledSelect.text(
        $this
          .children('option')
          .eq(0)
          .text(),
      );

      const $list = $('<ul />', {
        class: 'custom-select__options',
      }).insertAfter($styledSelect);

      for (let i = 0; i < numberOfOptions; i += 1) {
        $('<li />', {
          text: $this
            .children('option')
            .eq(i)
            .text(),
          rel: $this
            .children('option')
            .eq(i)
            .val(),
        }).appendTo($list);
      }

      const $listItems = $list.children('li');

      $styledSelect.on('click', function (e) {
        e.stopPropagation();
        $('div.custom-select_styled.active')
          .not(this)
          .each(function () {
            $(this)
              .removeClass('active')
              .next('ul.custom-select__options')
              .hide();
          });
        $(this)
          .toggleClass('active')
          .next('ul.custom-select__options')
          .toggle();
      });

      $listItems.on('click', function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
      });

      $(document).on('click', () => {
        $styledSelect.removeClass('active');
        $list.hide();
      });
    });
  };

  const init = () => {
    if (!$select.length) return false;

    _createWrapper();

    return true;
  };

  return {
    init,
  };
};

export default customSelect();
