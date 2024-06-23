import { query } from "../database/db.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const register = async(req,res)=>{
    const {userType, name, email, password, confPassword} = req.body

    console.log("Received register request:", { userType,name, email, password, confPassword });

    if(userType===""||userType===undefined||name ===""||name===undefined||email===""||email===undefined||password===""||password===undefined||confPassword===""||confPassword===undefined){
        return res.status(400).json({error: "Field must not be empty"})
    }
    if(password!==confPassword){
        return res.status(400).json({error: "Password doesn't match"})
    }

    try {
        //Map userType to role_id
        let roleId
        if(userType ==="penyedia"){
            roleId = 2
        }else if(userType === "pencari"){
            roleId = 3
        }else{
            return res.status(400).json({error: "Invalid userType"})
        }

        //hash password
        const salt = await bcrypt.genSalt(12)
        const hash = await bcrypt.hash(password,salt)

        //insert into database
        await query("INSERT INTO user(role_id, user_name, email, password) values (?,?,?,?)", [roleId,name, email, hash])

        return res.status(200).json({email, hash})
    } catch (error) {
        return res.status(500).json({error: "Terjadi kesalahan menyimpan data"})
    }
}

const login = async(req,res)=>{
    const {email, password:inputPass} = req.body
    //To do validasi email dan password
    try{
        const [validation] = await query("select id from user where email=?", [email])

        if(validation==undefined){
            return res.status(400).json({error: "User not found"})
        }
        const [check] = await query("select id,role_id, email, password from user where id=?", [validation.id])
        const isMatch = await bcrypt.compare(inputPass,check.password)
        if(!isMatch){
            return res.status(400).json({error:"Password is wrong"})
        }

        const data = {
            id:check.id,
            role_id:check.role_id,
            email:check.email,
        }

        jwt.sign(data, process.env.SECRETKEY, (err,token)=>{
            if(err) throw err
            return res.status(200).json({Authorization:`Bearer ${token}`,userType:check.role_id})
        })
        
    }
    catch(error){
        return res.status(500).json({error: "Terjadi kesalahan"}) 
    }
}

export {register,login}