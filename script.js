//1st We need to target all the classes

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let userName = id("userName"),
    email = id("mail"),
    password = id("passsword"),
    form = id("form"),

    errrMsg = classes("error"),
    failureIcon = classes("failure-icon");
    successIcon = classes("success-icon"),

    // now I target the from and add eventListner on the submit button

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        engine(userName, 0, "Username cannot be blank");
        engine(email, 1, "Email cannot be blank");
        engine(password, 2, "password can not be blank");
    });

    // we used id.value.trim to remove the all white spaces
    let engine = (id, serial, message) => {
        if(id.value.trim() === ""){          
            errrMsg[serial].innerHTML = message;
            id.style.border = "2px solid red";

            //failure Icon highlight here 

            failureIcon[serial].style.opacity = "1";
            successIcon[serial].style.opacity = "0";
        }else{
            errrMsg[serial].innerHTML = "";
            id.style.border = "2px solod green";

            // success icon highlight here;
            failureIcon[serial].style.opacity = "0";
            successIcon[serial].style.opacity = "1";
        }
    }

