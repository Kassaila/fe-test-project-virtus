const draggableWorkflow = () => {
  const projectLists = document.querySelectorAll('.workflow-column__projects-list');
  const PROJECT = '.project-element';

  const _counting = () => {
    const $column = $('.workflow-column');

    $column.each((i, col) => {
      const $quantityEl = $(col).find('.workflow-column__projects-quantity');
      const $priceEl = $(col).find('.workflow-column__prices-sum');
      let priceSum = 0;

      const _price = () => {
        $(col).find(PROJECT).each((j, el) => {
          priceSum += $(el).attr('data-price') * 1;
        });

        $priceEl.text(`$${priceSum}`);
      };

      const _quantity = () => {
        const quantity = $(col).find(PROJECT).length;

        if (quantity === 1) {
          $quantityEl.text(`${quantity} project`);
        } else {
          $quantityEl.text(`${quantity} projects`);
        }
      };

      setTimeout(() => {
        _price();
        _quantity();
      }, 100);
    });
  };

  const _draggable = () => {
    const draggable = new Draggable.Sortable(projectLists, {
      draggable: PROJECT,
      dropzone: '.workflow-column__projects-list',
      mirror: {
        constrainDimensions: true,
      },
    });

    draggable.on('sortable:stop', _counting);

    return draggable;
  };

  const init = () => {
    _counting();
    _draggable();
  };

  return {
    init,
  };
};

export default draggableWorkflow();
