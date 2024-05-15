const Users = require("../model/userSchema");
const cloudinary = require("../helper/cloudinaryconfig");
const moment = require("moment");

module.exports = {
    register: async (req, res) => {
        console.log("Hello world!");
        try {
            const upload = await cloudinary.uploader.upload(req?.file?.path);
            const { name } = req.body;
            console.log(upload, name)
            const date = moment(new Date()).format("YYYY-MM-DD");

            const userdata = new Users({
                name: name,
                imgpath: upload.secure_url,
                date: date
            });
            console.log(userdata)
            await userdata.save();
            res.status(200).json(userdata)
        } catch (error) {
            res.status(400).json({ message: "Something went wrong", success: false, error })
        }
    },
    getAllRecords: async (req, res) => {
        try {
            const getUser = await Users.find();
            res.status(200).json(getUser);
        } catch (error) {
            res.status(400).json({ message: "Something went wrong", success: false, error })
        }
    }
}