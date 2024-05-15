const express = require("express");
const router = new express.Router();
const { register, getAllRecords } = require("../controller/register")
const multer = require("multer");


// img storage path
const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads")
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`)
    }
});

// img filter
const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true)
    } else {
        callback(new Error("only images is allow"))
    }
}

const upload = multer({
    storage: imgconfig,
    fileFilter: isImage
})


router.post("/register", upload.single("photo"), register);
router.get("/getdata", getAllRecords);


module.exports = router;












