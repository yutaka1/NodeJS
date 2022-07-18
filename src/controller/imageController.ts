import { Request, Response } from "express";
import multer from "multer";
import path from "path";


export const Upload = async (req: Request, res: Response) => {
  const storage = multer.diskStorage({
    destination: './uploads',
    filename(_, _file, callback) {
      const randomName = Math.random().toString(20).substr(2,12);
      return callback(null, `${randomName}${path.extname(_file.originalname)}`)
    },
  })

  const upload = multer({storage}).single('image');
  
  upload(req, res, (err) => {
    
    if(err){
      return res.send(400).send(err);
    }

    res.send({
      url: `http://localhost:8000/api/uploads/${req.file.filename}`
    })
  });
}