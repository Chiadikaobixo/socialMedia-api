const router = require('express').Router()
const multer = require('multer')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "https://chiadi-socialmedia-api.herokuapp.com/public/assets" );
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage });
router.post("/avatar", upload.single("file"), async(req, res) => {
   
    try {
        return res.status(200).json("File uploded successfully");
    } catch (error) {
        console.error(error);
    }
});


module.exports = router