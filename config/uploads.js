// Import multer for handling file uploads
import multer from "multer";
import multerS3 from "multer-s3";

// Import the S3 connection
import { s3 } from "./database.js";


// Create multer upload configuration
export const upload = multer({

  // Store uploaded files in AWS S3
  storage: multerS3({

    // Use the S3 connection
    s3: s3,

    // S3 bucket where the file will be stored
    bucket: "amz-001-s301",

    metadata: function (req, file, cb) {

      cb(null, {
        fieldName: file.fieldname
      });

    },

    key: function (req, file, cb) {

      cb(null, Date.now().toString() + "-" + file.originalname);

    }

  })

});