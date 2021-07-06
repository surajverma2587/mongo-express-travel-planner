const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = {
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  plans: [
    {
      type: Schema.Types.ObjectId,
      ref: "Plan",
    },
  ],
};

const UserSchema = new Schema(userSchema);

const User = mongoose.model("User", UserSchema);

module.exports = User;
