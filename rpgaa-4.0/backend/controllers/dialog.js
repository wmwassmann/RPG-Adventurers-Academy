
import express from 'express';



import Dialogs from "../models/dialog.model.js";


const router = express.Router();


export const addNpcLines = async (req, res) => {
    const {  characterName, playerAlignment, lines } = req.body

    try {        

        const result = await Dialogs.create({ characterName, playerAlignment, lines })

        res.status(200).json({ result }) 
        

    } catch(error) {
        res.status(500).json({ message: 'Something went wrong' }) 
        console.log(error);
    }
}




export const getDialog = async (req, res) => {


    // const { id } = req.body;

    try {
        const characterDialogBlock = await Dialogs.find();

       

        res.status(200).json({ result: characterDialogBlock }) 
        console.log("controller", characterDialogBlock)

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' }) 
        console.log(error);
    }
}


export default router