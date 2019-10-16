const customscrollProjects = () => {
  const WRAPPER = '.your-projects-block__wrapper';

  if (!$(WRAPPER)) return false;

  const init = () => {
    const pscroll = new PerfectScrollbar(WRAPPER, {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20,
    });

    return pscroll;
  };

  return {
    init,
  };
};

export default customscrollProjects();
