const db = require("../../model");
const bcrypt = require('bcryptjs');

//get login view
exports.renderLogin = (req, res) => {
  res.render("auth/login");
};

// Handle login form submission

exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the user by email
      const user = await db.users.findOne({ where: { email } });
  
      // Check if the user exists
      if (!user) {
        return res.render('/login', { error: 'Invalid email or password.' });
      }
  
      // Compare the plain password with the hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.render('/login', { error: 'Invalid email or password.' });
      }
  
      // Successful login
      res.redirect('/');  // Redirect to a protected route or dashboard after successful login
    } catch (error) {
      console.error("Error logging in:", error);
      res.render('/login', { error: 'Login failed. Please try again.' });
    }
};

//get register view
exports.renderRegister = (req, res) => {
  res.render("auth/register");
};

// Handle registration form submission

exports.register = async (req, res) => {
    const { username, email, password, address } = req.body;
  
    try {
      // Check if the user already exists by email
      const userExists = await db.users.findOne({ where: { email } });
      if (userExists) {
        return res.render('/register', { error: 'User already exists with this email.' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
  
      // Save the user to the database
      await db.users.create({
        username,
        email,
        password: hashedPassword,  // Save the hashed password
        address,
      });
  
      // Redirect to login after successful registration
      res.redirect('/login');
    } catch (error) {
      console.error("Error registering user:", error);
      res.render('/register', { error: 'An error occurred while registering. Try again.' });
    }
};