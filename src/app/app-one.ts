import validators from "../utils/validation";

const txtName: HTMLInputElement | null = document.getElementById("name") as HTMLInputElement;
const txtMobile: HTMLInputElement | null = document.getElementById("mobile") as HTMLInputElement;
const txtEmail: HTMLInputElement | null = document.getElementById("email") as HTMLInputElement;
const elError: HTMLElement | null = document.getElementById("error");
const elTable: HTMLElement | null = document.getElementById("summaryTable");

const sendButton = document.getElementById("submit");

const showError = (show:boolean) =>{
    elError.style.display = show === true ? "block" : "none";
    return
}

const nameIsValid = (name:string) =>{
    var haveError = false;
    if(validators.isNotEmpty(name) === false){
        haveError = true;
        showError(haveError);
        console.log("name:  required error");
    }

    if(validators.isAlphabetsText(name) === false){
        haveError = true;
        showError(haveError);
        console.log("name: alphabets error");
    }

    if(validators.isLessOrEqualLength(name, 20) === false){
        haveError = true;
        showError(haveError);
        console.log("name: less or equal error");
    }

    return haveError ? false : true ;
}

const mobileIsValid = (mobile:string) =>{
    var haveError = false;
    if(validators.isNotEmpty(mobile) === false){
        haveError = true;
        showError(haveError);
        console.log("mobile: required error");
    }

    if(validators.isNumbersOnly(mobile) === false){
        haveError = true;
        showError(haveError);
        console.log("mobile: only numbers error");
    }

    if(validators.isLength(mobile, 10) === false){
        haveError = true;
        showError(haveError);
        console.log("mobile: lenght equals error");
    }

    return haveError ? false : true ;
}

const emailIsValid = (email:string) => {
    var haveError = false;
    if(validators.isEmail(email) === false){
        haveError = true;
        showError(haveError);
        console.log("email: invalid format error");
    }

    return haveError ? false : true ;
}

const resetForm = () => {
    txtName.value = "";
    txtMobile.value = "";
    txtEmail.value = "";
}

const sendHandler = () => {
    
    // validando nombre
    if(nameIsValid(txtName.value) === false) return;   
    
    if(mobileIsValid(txtMobile.value) === false) return;   

    if(emailIsValid(txtEmail.value) === false) return;

    const rowElement = document.createElement("tr");

    // row Name
    const cellName = document.createElement("td");
    var cellNameText = document.createTextNode(txtName.value);
    cellName.appendChild(cellNameText);
    rowElement.appendChild(cellName);

    // row Mobile
    const cellMobile = document.createElement("td");
    var cellMobileText = document.createTextNode(txtMobile.value);
    cellMobile.appendChild(cellMobileText);
    rowElement.appendChild(cellMobile);

    // row Mobile
    const cellEmail = document.createElement("td");
    var cellEmailText = document.createTextNode(txtEmail.value);
    cellEmail.appendChild(cellEmailText);
    rowElement.appendChild(cellEmail);

    elTable.appendChild(rowElement);

    showError(false);
    resetForm();


}

sendButton.onclick = sendHandler;
