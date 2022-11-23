import { SingletonClassCounter, SingletonObjectCounter } from "./singleton";
const setClassCouter = (value) => {
  document.querySelector("#class-count").innerHTML = value;
};
document.querySelector("#red-class").addEventListener("click", () => {
  setClassCouter(SingletonClassCounter.increment());
});
document.querySelector("#blue-class").addEventListener("click", () => {
  setClassCouter(SingletonClassCounter.increment());
});
const setObjCouter = (value) => {
  document.querySelector("#obj-count").innerHTML = value;
};
document.querySelector("#red-obj").addEventListener("click", () => {
  setObjCouter(SingletonObjectCounter.increment());
});
document.querySelector("#blue-obj").addEventListener("click", () => {
  setObjCouter(SingletonObjectCounter.increment());
});
setClassCouter(0);
setObjCouter(0);
