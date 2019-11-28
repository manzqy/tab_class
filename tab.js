//方法：1.添加事件 2.切换 3.显示与隐藏
class Tab {
  constructor(custom) {
    var option = {
      selectorA: ".item",
      selectorB: ".text",
      type: "click",
      bgName: "active",
      ctName: "show"
    };
    Object.assign(option, custom);
    Object.assign(this, option);
    this.items = document.querySelectorAll(this.selectorA);
    this.content = document.querySelectorAll(this.selectorB);
    this.addEvent();
  }
  addEvent() {
    this.items.forEach((e, i) => {
      e.addEventListener(this.type, () => {
        this.changeStyle(e);
        this.controlDb(i);
        this.index = i;
      });
    });
  }
  changeStyle(one) {
    this.items.forEach(e => {
      e.classList.remove(this.bgName);
    });
    one.classList.add(this.bgName);
  }
  controlDb(eq) {
    this.content.forEach(e => {
      e.classList.remove(this.ctName);
    });
    this.content[eq].classList.add(this.ctName);
  }
}
