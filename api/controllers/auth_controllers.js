import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { errorHandler } from '../utlis/error.js';

export const signup =  async (req, res,next) => {

    const { username, email, password } = req.body;
    const hadshedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hadshedPassword });
    try {
    await newUser.save();
    res.json({ message: 'User registered successfully' });

    } catch (error) {
        next(error);}
    


};
export const signin = async (req, res,next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email }); 
        if (!validUser) return next(errorHandler (404, 'User not found'));
        const validpassword = bcryptjs.compareSync(password, validUser.password);
        if (!validpassword) return next(errorHandler (400, 'wrong credentials'));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        const { password:pass,...rest} = validUser._doc;
        res.cookie('acces_token', token, { httpOnly: true})
        .status(200)
        .json({ rest });
        }
        catch (error) {
            next(error);
        }
}