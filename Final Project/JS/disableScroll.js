disable();
function disable() {
  let TopScroll = window.pageYOffset || document.documentElement.scrollTop;
  let LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;
  window.onscroll = function() {
    window.scrollTo(LeftScroll, TopScroll);
  };
}