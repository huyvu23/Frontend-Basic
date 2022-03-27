// https://www.youtube.com/watch?v=6j9b2_E34JM xem để hiểu bind
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tab_active = $(".tab-item.active");
const line = $(".tabs .line");
line.style.left = tab_active.offsetLeft + "px";
line.style.width = tab_active.offsetWidth + "px";

tabs.forEach((tab, index) => {
  const pane = panes[index];
  tab.onclick = function () {
    //   Kiểm tra cái nào cso active thì xóa đi
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});
