function append(){
    let data=JSON.parse(localStorage.getItem("products")) || [];
    let all=document.getElementById("all_products");
    //all.innerHTML=null;

   data.forEach(function(el,index){
       let div=document.createElement("div");
       let img=document.createElement("img");
       img.src=el.image;
       let t=document.createElement("p");
       t.innerText=el.type;
       let d=document.createElement("p");
       d.innerText=el.desc;
       let p=document.createElement("p");
       p.innerText=el.price;
     let btn=document.createElement("button");
      btn.innerText="Remove Product";
       btn.addEventListener("click",function(){
           remove(index);
      });
       
div.append(img,t,p,d,btn);
all.append(div);
  });
}

append();

function remove(index){
    // console.log(index);
    let data=JSON.parse(localStorage.getItem("products")) || [];
    let newData=data.filter(function(el,i){
      return  i!=index;
    //     if(i===index){
    //         let trash=JSON.parse(localStorage.getItem("trash")) || [];
    //         trash.push(el);
    //         localStorage.setItem("trash",JSON.stringify(trash));
    //     } else {
    //         return i !== index;
    //     }

    });
    console.log(newData);
    localStorage.setItem("products",JSON.stringify(newData));
    //append();
    location.reload()
}