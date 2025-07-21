const express = require("express");
const client = require('prom-client');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");





dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SECRET_KEY || "fallback-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Metrics endpoint
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});
// http 500
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total HTTP Requests',
  labelNames: ['method', 'status'],
});

app.use((req, res, next) => {
  res.on('finish', () => {
    httpRequestCounter.inc({ method: req.method, status: res.statusCode });
  });
  next();
});
// temporary error 
app.get('/test-error', (req, res) => {
  res.status(500).send('Simulated server error');
});



// Your existing routes here...

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});


// MongoDB connection
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/framework";
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  googleId: String,
  photoUrl: String,
});

const User = mongoose.model("User", userSchema);

passport.serializeUser((user, done) => {
  done(null, user.id); // Save user ID to session
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id); // Fetch user from DB using ID
    done(null, user); // Return user object after fetching from DB
  } catch (err) {
    done(err); // Handle any errors
  }
});
app.use(
  session({
    secret: process.env.SECRET_KEY || "fallback-secret-key", // Use a proper secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set secure to false for development
  })
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    async (token, tokenSecret, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });

        if (user) {
          return done(null, user);
        }

        user = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id,
          photoUrl: profile.photos[0].value,
        });

        await user.save();
        done(null, user);
      } catch (err) {
        done(err);
      }
    }
  )
);

//const transporter = nodemailer.createTransport({
  //service: "Gmail",
  //auth: {
    //user: "hamdirhouma24@gmail.com",
    //pass: "your-generated-app-password",
  //},
  //debug: true, // Enables debug mode
  //logger: true, // Logs the details to the console
//});

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "oo7796099@gmail.com",
    pass: "zejg oxnn hlsr ffir",
  },
  debug: true,
  logger: true,
});

// Routes
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP Connection Error:", error);
  } else {
    console.log("SMTP Server is ready to send emails!");
  }
});

// Email Sending Route
app.post("/send-email", async (req, res) => {
  const { prenom, nom, email, phone, date, message } = req.body;

  try {
    await transporter.sendMail({
      from: '"Hamdi Rhouma" <hamdirhouma24@gmail.com>',
      to: "hamdibhr@hotmail.com",
      subject: subject || "Default Subject",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Prénom:</b> ${prenom}</p>
        <p><b>Nom:</b> ${nom}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

// Signup route
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Missing name, email, or password." });
  }

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    // Send back the user data after signup
    res.status(201).json({
      message: "Signup successful!",
      user: { name: user.name, email: user.email },
    });
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ message: "Email already exists!" });
    } else {
      res.status(500).json({ message: "Error signing up!" });
    }
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return res.status(401).json({ message: "Invalid password" });
  }

  // Send back the user data
  res.status(200).json({
    message: "Login successful",
    user: { name: user.name, email: user.email },
  });
});
// Authentication status check
app.get("/auth/status", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      isAuthenticated: true,
      user: {
        name: req.user.name,
        email: req.user.email,
      },
    });
  } else {
    res.json({ isAuthenticated: false });
  }
});
// Google Authentication Routes
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/home");
  }
);

// Authentication status check
app.get("/auth/status", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ isAuthenticated: true, user: req.user });
  } else {
    res.json({ isAuthenticated: false });
  }
});

// Handle logout
app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).send("Error logging out");
    }
    res.clearCookie("connect.sid"); // Clears session cookies
    res.json({ message: "Logged out successfully" });
  });
});

// Home route
app.get("/home", (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`<h1>Welcome, ${req.user.name}</h1>`);
  } else {
    res.redirect("/login");
  }
});
const PORT = process.env.PORT || 5000;
// Server listen

app.get('/', (req, res) => {
  res.send('🚀 Doctor backend is live!');
});

