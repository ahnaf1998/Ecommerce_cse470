const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    username: { 
      type: String,
      required: [true, 'Please add an name'], 
      unique: true 
    },
    email: {
       type: String, 
       required: [true, 'Please add an email'],
       unique: true 
      },
    password: {
       type: String, 
       required: [true, 'Please add a password']
      },
    
    img:{
      type:String,
    }
  },
  { 
    timestamps: true
   },
  

);

//turn normal password to hash password
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

module.exports = mongoose.model("User", UserSchema);