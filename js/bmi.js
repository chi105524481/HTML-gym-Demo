const getBMI3 = (height,weight,point=2)=>{
    return (weight/(height/100)**2).toFixed(point);
}

const getBMI4 = (height,weight,point=2)=>(weight/(height/100)**2).toFixed(point);



const element = document.querySelectorAll("h1");

let calcEl = document.querySelector("#calc")
console.log(element);

element.forEach(element=>{
    element.style.color="red"
});
let bmiEl = document.querySelector("#comment .bmi");
console.log(bmiEl);
calcEl.addEventListener("click", ()=>{
    let comments = [
        { 'bmi': 18.5, 'comment': '體重過輕，請多攝取營養。' },
        { 'bmi': 24, 'comment': '正常範圍，恭喜你，請繼續保持。' },
        { 'bmi': 35, 'comment': '異常範圍，請節食運動!' },
    ];
    
    let name_in = document.querySelector("#name_i").value;
    let height_in =Number(document.querySelector("#height_i").value);
    let weight_in = Number(document.querySelector("#weight_i").value);
    let bmiEl = document.querySelector("#comment .bmi");
    console.log(bmiEl);

    let bmi = getBMI3(height_in,weight_in);
    if(height_in == "" ||weight_in == "")
    {
        alert("輸入框不可為空")
        
    }
    if(isNaN(bmi))
    {
        alert("參數錯誤")
        
    }
    console.log(bmi);
    bmiEl.innerHTML = bmi

    comments.forEach(comment=>{
        if(bmi>=comment["bmi"])
        {
            bmiEl.innerHTML = comment["comment"];
            return
        }
    })

});