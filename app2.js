let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let div = document.querySelectorAll("div");

function createlist(inpvalue){
   let li = document.createElement("li");
   li.textContent = inpvalue;
   li.style.fontSize = "1.3rem";
   let del = document.createElement("button");
   del.textContent = "Delete";
   del.classList.add("marginleft");
   li.append(del);
   ul.append(li);
   div[1].append(ul);

   li.addEventListener("click",function(){
      console.log("li was Clicked");
   })
   del.addEventListener("click",function(){
      console.log("del was Clicked");
   })
}

btn.addEventListener("click",function(){
   let inpvalue = inp.value;
   createlist(inpvalue);
   inp.value = "";
})


// let delbtn = document.querySelectorAll(".marginleft");
// for(btn of delbtn){
//    btn.addEventListener("click",function(){
//       console.log("DelBtn was Clicked");
//       let par = this.parentElement;
//       par.remove();
//    })
// }


// let li = document.querySelectorAll("li");
// for(list of li){
//    list.addEventListener("click",function(){
//       console.log("Li was Clicked");
//    })
// }
// console.log("list name is", li.textContent);


//Event Delegation
ul.addEventListener("click",function(event){
   if(event.target.nodeName == "BUTTON"){
      let listitem = event.target.parentElement;
      listitem.remove();
   }
})

