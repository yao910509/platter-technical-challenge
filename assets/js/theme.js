const scrollbarThumb = document.getElementById("customScrollbarThumb");
const productGrid = document.getElementById("productGrid");
const scrollbarTrack = document.getElementById("customScrollbar");

scrollbarThumb.addEventListener("mousedown", function (event) {
  var startX = event.clientX;
  var startLeft = scrollbarThumb.offsetLeft;

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);

  function onMouseMove(event) {
    var deltaX = event.clientX - startX;
    var newLeft = startLeft + deltaX;

    if (newLeft < 0) {
      newLeft = 0;
    } else if (newLeft > scrollbarTrack.offsetWidth - scrollbarThumb.offsetWidth) {
      newLeft = scrollbarTrack.offsetWidth - scrollbarThumb.offsetWidth;
    }

    scrollbarThumb.style.left = newLeft + "px";
    scrollbarThumb.style.left = newLeft + "px";

    var scrollRatio = newLeft / (scrollbarTrack.offsetWidth - scrollbarThumb.offsetWidth);
    var maxScroll = productGrid.scrollWidth - productGrid.clientWidth;
    productGrid.scrollLeft = scrollRatio * maxScroll;
  }

  function onMouseUp() {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }
});

document.getElementById("viewMore")?.addEventListener("click", function () {
  const hiddenProducts = document.querySelectorAll("#productGrid .grid-item.hidden");

  if (hiddenProducts.length === 0) return;

  hiddenProducts.forEach((product) => {
    product.classList.replace("hidden", "flex");
  });

  this.classList.replace("block", "hidden");
});
