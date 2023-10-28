const express = require('express')
const router = express.Router()
const cloudinary = require('cloudinary').v2
const Multer = require('multer')
import { verify } from 'jsonwebtoken'
import { Token } from '../auth'
require('dotenv').config()
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})
async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: 'auto',
  })
  return {
    status: true,
    path: res.secure_url,
  }
}
const storage = new Multer.memoryStorage()
const upload = Multer({
  storage,
})

const NOT_AUTHORIZED = {
  status: false,
  message: 'Not authorized',
}

const checkAuthorization = (req, res, next) => {
  const { token } = req.cookies
  if (!token) {
    return res.status(401).json(NOT_AUTHORIZED)
  }
  const verifiedToken = verify(token, process.env.APP_SECRET) as Token
  if (!verifiedToken || verifiedToken.role !== 'ADMIN')
    return res.status(401).json(NOT_AUTHORIZED)
  next()
}

router.post(
  '/v1/image/single',
  upload.single('file'),
  checkAuthorization,
  async (req, res) => {
    try {
      const b64 = Buffer.from(req.file.buffer).toString('base64')
      let dataURI = 'data:' + req.file.mimetype + ';base64,' + b64
      const cldRes = await handleUpload(dataURI)
      res.json(cldRes)
    } catch (error) {
      console.log(error)
      res.send(NOT_AUTHORIZED)
    }
  },
)
module.exports = router
