import { query } from "../database/db.js"

export const getKota = async(req,res)=>{
    try{
        const result = await query('Select * from kota')
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const insertKota = async(req,res)=>{
    const {kota}= req.body
    try {
        await query("INSERT INTO kota(kota_name) values (?)", [kota])
        return res.status(200).json({msg:"Kota Ditambahkan"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const updateKota = async(req,res)=>{
    const {kota}= req.body
    const {id}=req.params
    try {
        await query("UPDATE kota SET kota_name=? where id=?", [kota, id])
        return res.status(200).json({msg:"Kota Diubah"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const deleteKota = async(req,res)=>{
    const {id}=req.params
    try {
        await query("DELETE FROM kota where id=?", [id])
        return res.status(200).json({msg:"Kota Dihapus"})
    } catch (error) {
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const getKotaById = async(req,res)=>{
    const {id}=req.params
    try{
        const result = await query('Select * from kota where id=?', [id])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}

export const getKotaTest = async(req,res)=>{
    const {id, kota_name} = req.query
    console.log(id, kota_name)
    console.log("TERPANGGIL")
    try{
        const result = await query('Select * from kota where id=?', [id,kota_name])
        return res.status(200).json({success:true, data:result})
    }catch(e){
        console.log("Terjadi kesalahan", e)
        return res.status(500).json({msg:"terjadi kesalahan pada server"})
    }
}
