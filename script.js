function rangeSlider(value){
    document.getElementById("range-value").innerHTML = value;
}

const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const Lowercase = "abcdefghijklmnopqrstuvwxyz"
const Number = "0123456789"
const symbol = "`~!@#$%^&*)(_-+=}{][\|:>.<,?/"

const passwordbox = document.getElementById("Password")
const copy = document.getElementById("copy_get")
const range = document.getElementById("range")
const checkUpper = document.getElementById("check_upper")
const checkLower = document.getElementById("check_lower")
const checkNum = document.getElementById("check_num")
const checkSymbol = document.getElementById("check_sym")
const done = document.getElementById("done")


const getRandom=(dataset)=>{
    return dataset[Math.floor(Math.random()*dataset.length)]
}

const generatePass=(password="")=>{
    let length = range.value
    if(checkUpper.checked){
        password += getRandom(Uppercase)
    }
    if(checkLower.checked){
        password += getRandom(Lowercase)
    }
    if(checkNum.checked){
        password += getRandom(Number)
    }
    if(checkSymbol.checked){
        password += getRandom(symbol)
    }
    if(password.length < length){
        return generatePass(password)
    }
    // console.log(password);
    passwordbox.value = password
}

document.getElementById("btn").addEventListener("click",()=>{
    generatePass()
})

copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(passwordbox.value)
    
    setTimeout(() => {
        done.classList.remove("hidden")
    }, 100);
    setTimeout(() => {
        done.classList.add("hidden")
    }, 1000);

})