import User from "../models/User.js";
import bcrypt from "bcrypt";
import Booking from "../models/Booking.js";


export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return console.log(err);
  }
  if (!users) {
    return res.status(500).json({ message: "error unexpected" });
  }
  return res.status(200).json({ users });
};

export const addUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (
    !name &&
    name.trim() === "" &&
    !email &&
    email.trim() === "" &&
    !password &&
    password.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Inputs" });
  }
  const hashedPassword = bcrypt.hashSync(password);
  let user;
  try {
    user = new User({ name, email, password: hashedPassword });
    user = await user.save();
  } catch (err) {
    return console.log(err);
  }
  if (!user) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }
  return res.status(201).json({ id: user._id });
};

export const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
  if (
    !name &&
    name.trim() === "" &&
    !email &&
    email.trim() === "" &&
    !password &&
    password.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid input" });
  }
  const hashedpass = bcrypt.hashSync(password, 10);
  let user;
  try{
    user = await User.findByIdAndUpdate(id,{name,email,password:hashedpass});
  }catch(err){
    return console.log(err);
  }
  if((!user)){
    return res.status(500).json({message:"unexpected err"});
  }
  res.status(200).json({message:"updated"})
};


export const deleteUser = async(req,res,next)=>{
    const id = req.params.id;
    let user; 
    try{
     user = await User.findByIdAndDelete(id);
    }catch(err){
        return console.log(err);
      }
      if(!user){
        return res.status(500).json({message:"unexpected err"});
      }
      res.status(200).json({message:"deleted"})
}

export const login = async (req, res, next) => {
    const {email, password } = req.body;
    if (

      !email &&
      email.trim() === "" &&
      !password &&
      password.trim() === ""
    ) {
      return res.status(422).json({ message: "Invalid input" });
    }

    let existingUser;
    try {
        existingUser = await User.findOne({email});
    
    } catch (err) {
      return console.log(err);
    }
    if(!existingUser){
        return res.status(400).json({message:"incrt email"})
    }
    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message:"incrt pass"})
    }
    res.status(200).json({message:"login"})
};


export const getBookingsofUser = async (req, res, next) => {
  const id = req.params.id;
  let bookings;
  try {
    bookings = await Booking.find({user : id});

} catch (err) {
  return console.log(err);
}
if(!bookings){
  return res.status(400).json({message:"Booking not found"})
}
res.status(200).json({bookings})
};



