function append(){
    let data=JSON.parse(localStorage.getItem("products")) || [];
    let all=document.getElementById("all_products");
    all.innerHTML=null;

   data.forEach(function(el,index){
       let div=document.createElement("div");
       let img=document.createElement("img");
       img.src=el.image;
       let t=document.createElement("t");
       t.innerText=el.type;
       let d=document.createElement("d");
       d.innerText=el.desc;
       let p=document.createElement("p");
       p.innerText=el.price;
    //  let btn=document.createElement("button");
    //   btn.innerText=remove;
    //    btn.setAttribute("onclick",function(){
    //        remove(index);
      // });
       
div.append(img,t,p,d);
all.append(div);
  });
}

append();

// function remove(index){
//     let data=JSON.parse(localStorage.getItem("products")) || [];
//     let newData=data.filter(function(el,i){
//         if(i===index){
//             let trash=JSON.parse(localStorage.getItem("trash")) || [];
//             trash.push(el);
//             localStorage.setItem("trash",JSON.stringify(trash));
//         } else {
//             return i !== index;
//         }
//     });

//     localStorage.setItem("products",JSON.stringify(newData));
//     append();
//     console.log(newData);
// }