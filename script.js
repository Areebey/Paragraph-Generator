// Here we make a logic

const input=document.getElementById("noOfWords");
const container=document.querySelector(".container")


const generateWord = (n) =>{
    let text="";
    const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0;i<n;++i){
        const random=(Math.random()*25).toFixed(0);
        text += letters[random];
    }
    return text;
}
console.log(generateWord(15))


let noOfWords;
const generatePara =() =>{
    noOfWords=Number(input.value);

    let para=document.createElement("p");
    para.innerText="Sample Text"

    para.setAttribute("class","mypara");
    container.append(para);

}
