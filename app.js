let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let dltBtn = document.createElement("button");
     dltBtn.innerText = "Delete";
     dltBtn.classList.add("delete");
     
      item.appendChild(dltBtn);
      ul.appendChild(item);
      inp.value= "";
});
let dltBtns = document.querySelectorAll(".delete");
for(dltBtn of dltBtns){
dltBtn.addEventListener("click" , function(){
  let par = this.parentElement;
  par.remove();
})
};