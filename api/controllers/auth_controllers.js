import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export const signup =  async (req, res) => {

    const { username, email, password } = req.body;
    const hadshedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hadshedPassword });
    try {
    await newUser.save();
    res.json({ message: 'User registered successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
    


};