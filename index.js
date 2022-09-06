export default const setScreenSize = () => {
  document
    .querySelector(":root")
    .style.setProperty("--screen-height", `${window.innerHeight}px`);
};