import { IUserRegister } from "@/Types/Types";
import { error } from "console";

const validateRegisterForm= (input:IUserRegister)=>{
    const errors:IUserRegister | any= {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;


        

    if (!input.name) {errors.name = "You must enter a name"}
    else if (input.name.trim().length < 3) {errors.name = "You must enter a valid name"}
    else if (input.name.length < 3) {errors.name = "Name must be at least 3 characters long"} 
    else if (input.name.length > 15) {errors.name = "Name must be maximum 15 characters long"}
    
    if (!input.email) {errors.email = "You must enter an email"}
    else {
        if (!emailRegex.test(input.email)) {errors.email = "You must enter a valid email"}
    }
    
    if (!input.password) {errors.password = "You must enter a password"}
    else {
        if (input.password.length < 8) {errors.password = "Password must be at least 8 characters long"}
        else if (input.password.length > 20) {errors.password = "Password must be less than 20 characters long"}
        else if (!passwordRegex.test(input.password)) {errors.password = "Password must include an uppercase letter and at least one number"}
    } 
    
    if (input.password !== input.confirmPassword) {errors.confirmPassword = "Passwords must match"} 
    
    if (!input.address) {errors.address = "You must enter an address"}
    else {
        if (input.address.trim().length < 5) {errors.address = "You must enter a valid address"}
        if (input.address.length < 5) {errors.address = "Address must be at least 5 characters long"} 
        if (input.address.length > 40) {errors.address = "Address must be maximum 40 characters long"}
    }
    
    if (!input.phone) {errors.phone = "You must enter a phone number"}
    else {
        if (input.phone.trim().length < 8) {errors.phone = "You must enter a valid phone number"}
        if (!phoneRegex.test(input.phone)) {errors.phone = "You must enter a valid phone number"}
    }
    


return errors;
}

export default validateRegisterForm;