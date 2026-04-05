/* const boss = document.getElementById("boss");
boss.innerHTML = "Paru";
window.addEventListener("DOMContentLoaded", () => {  
});
*/

const boxes = document.getElementsByClassName("box");
console.log(boxes);

for (let i = 0; i < boxes.length; i++) {
  if (i == 0) {
    boxes[i].innerHTML = "This is Box 1";
  }

  if (i == 1) {
    boxes[i].innerHTML = "This is Box 2 ";
  }
  // console.log(boxes[i]);
}