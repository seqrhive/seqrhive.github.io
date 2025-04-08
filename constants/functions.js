export const handleHover = (e) => {
  const { currentTarget: target } = e;

  const rect = target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  target.style.setProperty(`--mouse-x`, `${x}px`);
  target.style.setProperty(`--mouse-y`, `${y}px`);
};
