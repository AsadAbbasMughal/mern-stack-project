        import jwt from "jsonwebtoken";
import { User } from "../models/auth.model.js";
        import bcrypt from 'bcrypt'
        import dotenv from 'dotenv'

        dotenv.config()

        export const registerUser = async (req, res) => {
            try {
                const { name, email, password } = req.body;

                
                const existingUser = await User.findOne({ email }); 
                if (existingUser) {
                    return res.status(400).json({ message: "User already registered" });
                }

                const hashPass =await bcrypt.hash(password, 10)


                const newUser = new User({
                    name,
                    email,
                    password: hashPass
                });

                await newUser.save(); 

                res.status(201).json({
                    success: true,
                    message: "User registered successfully",
                    user: {
                        id: newUser._id,
                        name: newUser.name,
                        email: newUser.email
                    }
                });
            } catch (error) {
                res.status(500).json({ success: false, message: "Registration failed", error });
            }
        };



// login 
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const findUser = await User.findOne({ email });
        if (!findUser) {
            return res.status(400).json({ message: "User not registered" });
        }

        // ✅ Check password
        const isPasswordMatch = await bcrypt.compare(password, findUser.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        // ✅ Generate JWT token
        const token = jwt.sign(
            { id: findUser._id, email: findUser.email },
            process.env.SECRET_KEY,
            { expiresIn: "1h" }
        );

        // ✅ Set cookie
        res.cookie("token", token, {
            httpOnly: true,       // 🛡️ Prevents JS access to cookie
            secure: false,        // Set true if using HTTPS
            sameSite: "lax",      // Helps with CSRF protection
            maxAge: 3600000       // 1 hour
        });

        // ✅ Success response
        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user: {
                id: findUser._id,
                name: findUser.name,
                email: findUser.email
            }
        });
    } catch (error) {
        console.log("login error ---> ", error.message);
        res.status(500).json({ message: "Login failed", error });
    }
};

 
