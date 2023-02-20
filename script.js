// Here we make a logic

const input=document.getElementById("noOfWords");
const container=document.querySelector(".container")

let noOfWords;

const generatePara =() =>{
    noOfWords=Number(input.value);



    let para=document.createElement("p");
    para.innerText="Sample Text"
    para.setAttribute("class","mypara");
    container.append(para);


}
