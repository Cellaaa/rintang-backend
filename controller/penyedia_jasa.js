import { query } from "../database/db.js"

export const getPenyedia = async(req,res)=>{
    try{
        const result = await query('Select * from penyedia')
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const insertPenyedia = async(req,res)=>{
    const {penyedia}= req.body
    try {
        await query("INSERT INTO penyedia(penyedia) values (?)", [penyedia])
        return res.status(200).json({msg:"Penyedia Jasa Ditambahkan"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const updatePenyedia = async(req,res)=>{
    const {penyedia}= req.body
    const {id}=req.params
    try {
        await query("UPDATE penyedia_jasa SET penyedia_jasa=? where id=?", [penyedia, id])
        return res.status(200).json({msg:"Penyedia Jasa Diubah"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const deletePenyedia = async(req,res)=>{
    const {id}=req.params
    try {
        await query("DELETE FROM penyedia_jasa where id=?", [id])
        return res.status(200).json({msg:"Penyedia Dihapus"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const getPenyediaById = async(req,res)=>{
    const {id}=req.params
    try{
        const result = await query('Select * from penyedia_jasa where id=?', [id])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}