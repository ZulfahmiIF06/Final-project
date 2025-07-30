const productModel = require("../models/produtModel");
const { responseDefault } = require("../utils/responseMessage");
const { createValidation } = require('../validation/productValidation');

const addData = async (req, res) => {
    try{
        //data exist
        const dataExist = await productModel.findOne({npm: req.body.npm});
        if (dataExist) {
            return res.status(400).json({
                message: responseDefault.DATA_EXISTS,
            });
        }


        //validation 
        const {error} = await createValidation(req.body);
        if(error){
            return res.status(400).json({
                message: error.details[0].message,
            });
        }
        const response = await productModel.create(req.body);
        res.status(201).json({
            message: responseDefault.CREATED_DATA,
            data: response,
        });
    } catch (error){
        console.log(error);
    }
};

const getData = async (req, res) =>{
    try {
        const response = await productModel.find();
        res.status(200).json({
            data: response,
        });
    } catch (error) {
        console.log(error);
    }
}

//get data by id
const getDataById = async (req, res) =>{
    try{

        const ID = await productModel.findOne({ _id: req.params.id});
        if(!ID){
            return res.status(400).json({
                message: responseDefault.ID_NOT_FOUND,
            });
        }

        const response =await productModel.findById(req.params.id);
        res.status(200).json({
            data: response,
        });
    } catch(error) {
        console.log(error);
    }
};

//get data by id and upload
const updateData = async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    try {
        //get id not found
        const ID = await productModel.findOne({ _id: req.params.id});
        if(!ID){
            return res.status(400).json({
                message: responseDefault.ID_NOT_FOUND,
            });
        }

        const response = await productModel.findByIdAndUpdate({_id:id}, { $set: body});
        res.status(200).json({
            message:responseDefault.DATA_UPDATE,
        });
    } catch (error) {
        console.log(error);
    }
};

//get data by id and delete
const deleteData = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.params.id);
        res.status(200).json ({
            message: responseDefault.DATA_DELETE,
        })
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    addData,
    getData,
    getDataById,
    updateData,
    deleteData

};