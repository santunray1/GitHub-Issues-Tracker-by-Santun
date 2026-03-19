// console.log("login functionly comming");

document.getElementById("login-btn").addEventListener("click", function(){
    // console.log("login btn click kolam");
    
    // 1- get the mobile number input
    const inputNumber = document.getElementById("input-number");
    const contactNumber = inputNumber.value;
    // console.log(contactNumber);
    
    // 2-get the pin
    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    // console.log(pin);
    
    // 3-match pin & mobile number
    if (contactNumber=="admin" && pin=="admin123"){
        
        // 3-1 true:::> alert > HomePage
        alert("login Success");


        // window.location.replace("/home.html")
        window.location.assign("/home.html")
        
    }else{
        // 3-2 false:::> alert > Return
        alert("login Failed")
        return;
    }
    
})
