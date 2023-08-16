import { hash, compare } from "bcryptjs";

const hashPassword= async(passwrod)=>{
    const hashedPassword= await hash(passwrod,13)
    return hashedPassword
}

const verifyPassword=async(password, userPassword)=>{
    const verify= await compare(password, userPassword)
    return verify
}

export {hashPassword, verifyPassword}