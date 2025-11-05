import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{type: String, required:true, unique:true}, 
    email:  {type: String, required:true, unique:true},
    password: {type:String, required:true},
    img:{type:String, default:"https://imgs.search.brave.com/-RhafcH6DgzqEOMazZIMHlK0ORcw3qMTG5pXA3BIPnY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvYnVzaW5lc3Mt/bWFuLWF2YXRhci1w/cm9maWxlXzExMzMy/NTctMjQzMS5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQwJnE9/ODAw"},
}, 
{timestamps:true});
const User = mongoose.model('User', userSchema);
export default User;