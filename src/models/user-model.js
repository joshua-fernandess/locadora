import db from "../config/db.js";
import bcrypt from "bcrypt";

const userSchema = new db.Schema({
  name: {
    type: String,
    required: true,
  },
  birthday_date: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
      required: true,
    },
  },
  password: {
    type: String,
	  required: true,
    minLength: 5,
  },
  permission_type: {
    type: String,
    enum: ["admin", "user"],
    required: true,
  },
  phones:{ 
    type: [String],
  },
  address: { 
    type: String },
  house_number: { 
    type: String }
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = db.model("User", userSchema);

export default User;
