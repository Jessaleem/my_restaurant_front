import { InconmingForm } from 'formidable'
import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY.SECRET,
  secure: true,
})

export const config = {
  api: {
    bodyParse: false
  }
};

export default async function upload(req, res) {
  if (req. methhod === 'POST') {
    const data = await new Promise((resolve, reject) =>{
      const form = new InconmingForm();

      form.parse(req,(err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });
    const file = data?.files?.inputFile.filepath;
    
  }
}