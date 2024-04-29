import { IUserLogin, IUserRegister } from "@/Types/Types";


const validateLoginForm= (input:IUserLogin)=>{
    const errors:IUserRegister | any= {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    
    if (!input.email) {errors.email = "You must enter an email"}
    else {
        if (!emailRegex.test(input.email)) {errors.email = "You must enter a valid email"}
    }
    
    if (!input.password) {errors.password = "You must enter a password"}
    else {
        if (input.password.length < 8) {errors.password = "Password must be at least 8 characters long"}
        else if (!passwordRegex.test(input.password)) {errors.password = "Password must include an uppercase letter and at least one number"}
    } 
    


return errors;
}

export default validateLoginForm;