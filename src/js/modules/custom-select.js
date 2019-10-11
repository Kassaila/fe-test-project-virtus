const customSelect = () => {
  const init = () => {
    $('.custom-select').each(function () {
      const $this = $(this);
      const numberOfOptions = $(this).children('option').length;

      $this.addClass('select-hidden');
      $this.wrap('<div class="select"></div>');
      $this.after('<div class="select-styled"></div>');

      const $styledSelect = $this.next('div.select-styled');
      $styledSelect.text(
        $this
          .children('option')
          .eq(0)
          .text(),
      );

      const $list = $('<ul />', {
        class: 'select-options',
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

      $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.select-styled.active')
          .not(this)
          .each(function () {
            $(this)
              .removeClass('active')
              .next('ul.select-options')
              .hide();
          });
        $(this)
          .toggleClass('active')
          .next('ul.select-options')
          .toggle();
      });

      $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
      });

      $(document).click(() => {
        $styledSelect.removeClass('active');
        $list.hide();
      });
    });
  };

  return {
    init,
  };
};

export default customSelect();
