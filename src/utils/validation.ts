export default {
    isNotEmpty: (value:string) => {
        // valida que no este vacio
        return value != ""
    },
    isLength: (value:string, successLength:number) => {
        // valida el tamañao
        return value.length >= successLength ? true: false;
    },
    isLessOrEqualLength: (value:string, successLength:number) => {
        // valida el tamañao
        return value.length <= successLength ? true: false;
    },
    isAlphabetsText: (value:string) => {
        // solo letras y espacios
        const textRegex = new RegExp(/^[a-zA-ZñÑ ]+$/, "gm");
        return textRegex.test(value);
    },
    isNumbersOnly: (value:string) =>{
        // solo numeros
        const numbersRegex = new RegExp(/^[0-9]+$/, "gm");
        return numbersRegex.test(value);
    },
    isEmail: (value:string) =>{ 
        // valida que sea un correo
        const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
        return emailRegex.test(value);
    }
}