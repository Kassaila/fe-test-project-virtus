const customScroll = () => {
  const WRAPPER = '.custom-scroll';
  const scrollWrappers = document.querySelectorAll(WRAPPER);
  const option = {
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20,
  };
  const pscrolls = [];

  const init = () => {
    if (!scrollWrappers.length) return false;

    scrollWrappers.forEach((el, i) => {
      pscrolls[i] = new PerfectScrollbar(el, option);
    });

    return true;
  };

  return {
    init,
  };
};

export default customScroll();
