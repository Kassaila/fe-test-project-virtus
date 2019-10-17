const customscrollWorkflow = () => {
  const WRAPPER = '.workflow-area';
  const option = {
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20,
  };

  const init = () => {
    if (!$(WRAPPER).length) return false;

    const pscroll = new PerfectScrollbar(WRAPPER, option);

    return pscroll;
  };

  return {
    init,
  };
};

export default customscrollWorkflow();
