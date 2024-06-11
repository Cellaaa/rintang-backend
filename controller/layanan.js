import { query } from "../database/db.js"

export const getLayanan = async(req,res)=>{
    try{
        const result = await query('Select * from layanan')
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const insertLayanan = async(req,res)=>{
    const {layanan}= req.body
    try {
        await query("INSERT INTO layanan(layanan) values (?)", [layanan])
        return res.status(200).json({msg:"Layanan Ditambahkan"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const updateLayanan = async(req,res)=>{
    const {layanan}= req.body
    const {id}=req.params
    try {
        await query("UPDATE layanan SET layanan=? where id=?", [layanan, id])
        return res.status(200).json({msg:"Layanan Diubah"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const deleteLayanan = async(req,res)=>{
    const {id}=req.params
    try {
        await query("DELETE FROM layanan where id=?", [id])
        return res.status(200).json({msg:"Layanan Dihapus"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const getLayananById = async(req,res)=>{
    const {id}=req.params
    try{
        const result = await query('Select * from layanan where id=?', [id])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}