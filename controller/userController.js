import { storeUser, findUser } from "../model/userModel.js"


//Register user 
export const user = async(req, res)=>{ 

    try{ 

        const {username, email, password}= req.body

        const imageLocation = req.file ? req.file.location : null;

        const existingUser = await findUser(email);

        if (existingUser){ 

            return res.json({ 

                success: false, 
                message: "Email already registered" 

            }); 

        }

        const id = Date.now().toString();

        await storeUser({

            id,
            username,
            email,
            password,
            image: imageLocation

        });

        res.json({

            success: true,

            message: "user created",

            data: { 
                id,
                username,
                email,
                image: imageLocation
            }

        });

    } 

    catch (error) { 

        console.log(error);

        res.status(500).json({

            success: false,
            message: "Something went wrong"

        });

    }

};


// LOGIN

export const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const existingUser = await findUser(email);

        if (!existingUser) {

            return res.json({

                success: false,
                message: "Email not registered"

            });

        }

        if (password !== existingUser.password) {

            return res.json({

                success: false,
                message: "Incorrect password"

            });

        }

        res.json({

            success: true,

            message: "Login successful",

            data: {

                id: existingUser.id,
                username: existingUser.username,
                email: existingUser.email,
                image: existingUser.image

            }

        });

    } 

    catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,
            message: "Something went wrong"

        });

    }

};