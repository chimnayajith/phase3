const User = require("../../models/userModel");
const { hashData } = require("../auth/hashPass");

const createUser = async (data) => {
  try {
    let { username, email, password, role } = data;

    // checking if user exists with the provided email or username
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      if (existingUser.email === email) {
        throw new Error("REGISTERED_EMAIL_ADDRESS");
      } else {
        throw new Error("USERNAME_TAKEN");
      }
    }

    // hashing the password with bcrypt
    const hashedPassword = await hashData(password);

    // creating a new user
    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
      role,
    });

    // save the created user
    const createdUser = newUser.save();
    return createdUser;
  } catch (error) {
    throw error;
  }
};

module.exports = { createUser };
