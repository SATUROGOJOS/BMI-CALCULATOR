var btn = document.querySelector(".btndiv button")
btn.addEventListener("click",calculatebmi)
function calculatebmi(){
    var fullname = document.querySelector(".FullName").value
    var height = document.querySelector(".Height") .value
    var weight = document.querySelector(".Weight") .value
    var resultp = document.querySelector(".resultp")
    var bmi = weight/(height*height)
    //console.log(bmi)
    bmi = bmi.toFixed(2)

    if(fullname == "" || height == "" || weight == "" ){
        resultp.innerHTML = "Fill all boxes correctly"
        resultp.style.color="red"  
        
    }else{
        resultp.innerHTML = "Hello " + fullname + ", Your BMI value is " + bmi + "kg/m <sup>2</sup>"
        resultp.style.color = "black"
    }
    
    
}