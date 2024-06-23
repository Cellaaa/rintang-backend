import { query } from "../database/db.js"

export const getProvinsi = async(req,res)=>{
    try{
        const result = await query('Select * from provinsi')
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const insertProvinsi = async(req,res)=>{
    const {provinsi_name}= req.body
    try {
        await query("INSERT INTO provinsi(provinsi_name) values (?)", [provinsi_name])
        return res.status(200).json({msg:"Provinsi Ditambahkan"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const updateProvinsi = async(req,res)=>{
    const {provinsi_name}= req.body
    const {id}=req.params
    try {
        await query("UPDATE provinsi SET provinsi_name=? where id=?", [provinsi_name, id])
        return res.status(200).json({msg:"Provinsi Diubah"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const deleteProvinsi = async(req,res)=>{
    const {id}=req.params
    try {
        await query("DELETE FROM provinsi where id=?", [id])
        return res.status(200).json({msg:"Provinsi Dihapus"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const getProvinsiById = async(req,res)=>{
    const {id}=req.params
    try{
        const result = await query('Select * from provinsi where id=?', [id])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}