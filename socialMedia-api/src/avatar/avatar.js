const router = require('express').Router()
const multer = require('multer')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/assets");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

router.post('/users/avatar', upload.single('avatar'), async (req, res) => {
    req.user = req.file
    await req.user

    res.status(200).send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})


module.exports = router