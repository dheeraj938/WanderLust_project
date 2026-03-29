# WanderLust - Travel Listing & Booking Platform

A full-featured travel accommodation listing platform built with Node.js, Express, MongoDB, and Cloudinary. Users can create listings, browse properties, leave reviews, and manage their travel accommodations.

## ✨ Features

- **User Authentication**: Secure signup and login with Passport.js
- **Property Listings**: Create, edit, and delete property listings
- **Image Uploads**: Upload images directly to Cloudinary with multer
- **Reviews & Ratings**: Leave detailed reviews with star ratings on properties
- **User Sessions**: Persistent sessions with MongoDB session store
- **Flash Messages**: Real-time feedback for user actions
- **Responsive Design**: Bootstrap-based responsive UI
- **Data Validation**: Joi schema validation on server-side
- **Error Handling**: Comprehensive error handling and custom error pages

## 🛠 Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Passport.js** - Authentication middleware
- **Joi** - Data validation

### Frontend
- **EJS** - Templating engine
- **EJS-Mate** - Layout templating
- **Bootstrap** - CSS framework
- **Starability.css** - Star rating component

### Storage & Services
- **Cloudinary** - Cloud image storage and CDN
- **MongoDB Atlas** - Cloud MongoDB database
- **Connect-Mongo** - MongoDB session store

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** (v22.18.0 or higher)
- **npm** (comes with Node.js)
- **MongoDB Atlas Account** - [Create one here](https://www.mongodb.com/atlas)
- **Cloudinary Account** - [Sign up here](https://cloudinary.com)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dheeraj938/WanderLust_project.git
   cd WanderLust_project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file**
   
   Create a `.env` file in the root directory with the following variables:
   
   ```env
   # MongoDB Atlas Database URL
   ATLASDB_URL=mongodb+srv://username:password@cluster.mongodb.net/wanderlust
   
   # Session Secret Key (use a strong random string)
   SECRET=your_super_secret_session_key_here
   
   # Cloudinary Configuration
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   ```

### Getting Your Credentials

#### MongoDB Atlas
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a cluster
3. Click "Connect"
4. Copy the connection string
5. Replace `username:password@cluster` with your credentials

#### Cloudinary
1. Visit [Cloudinary Dashboard](https://cloudinary.com/console)
2. Go to Account Details
3. Copy your Cloud Name, API Key, and API Secret

## 🚀 Running the Project

### Local Development
```bash
node app.js
```

The application will start on `http://localhost:8080`

### First Visit
- You'll be redirected to the login page
- Click "Sign Up" to create a new account
- After signup, you can create property listings
- Upload images and add reviews to properties

## 📁 Project Structure

```
WanderLust_project/
├── app.js                 # Main application file
├── cloudConfig.js         # Cloudinary configuration
├── schema.js              # Joi validation schemas
├── middleware.js          # Custom middleware functions
│
├── models/                # Mongoose schemas
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/                # Express routes
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── controllers/           # Business logic
│   ├── listing.js
│   ├── reviews.js
│   └── users.js
│
├── views/                 # EJS templates
│   ├── layouts/
│   ├── includes/
│   ├── users/
│   ├── index.ejs
│   ├── show.ejs
│   ├── new.ejs
│   ├── edit.ejs
│   └── error.ejs
│
├── public/                # Static assets
│   ├── css/
│   └── js/
│
├── utils/                 # Utility functions
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── init/                  # Database initialization
│   └── data.js
│
├── .env                   # Environment variables (create this)
├── package.json
└── README.md
```

## 🔧 API Routes

### Authentication Routes (`/`)
- `GET /signup` - Sign up form
- `POST /signup` - Create new user
- `GET /login` - Login form
- `POST /login` - Authenticate user
- `GET /logout` - Logout user

### Listings Routes (`/listings`)
- `GET /listings` - View all listings
- `GET /listings/new` - Create listing form
- `POST /listings` - Create new listing
- `GET /listings/:id` - View listing details
- `GET /listings/:id/edit` - Edit listing form
- `PUT /listings/:id` - Update listing
- `DELETE /listings/:id` - Delete listing

### Reviews Routes (`/listings/:id/reviews`)
- `POST /listings/:id/reviews` - Add review
- `DELETE /listings/:id/reviews/:reviewId` - Delete review

## 🎯 Key Features Explained

### Image Upload Flow
1. User selects image file on create/edit form
2. Multer middleware handles file
3. CloudinaryStorage uploads to Cloudinary
4. URL and filename stored in database
5. Image displays on listing

### Authentication
- Passport.js with local strategy
- Passwords hashed with passport-local-mongoose
- Sessions managed by connect-mongo

### Reviews
- Linked to both listings and users
- Star ratings (1-5)
- Automatically deleted when listing is removed

## 🚀 Deployment

### Deploy to Vercel
1. Create `vercel.json` in root:
   ```json
   {
     "buildCommand": "npm install",
     "outputDirectory": "."
   }
   ```

2. Push to GitHub

3. Go to [Vercel](https://vercel.com) and import the repository

4. Add environment variables in Vercel dashboard:
   - `ATLASDB_URL`
   - `SECRET`
   - `CLOUD_NAME`
   - `CLOUD_API_KEY`
   - `CLOUD_API_SECRET`

5. Deploy

## 📝 Usage Example

### Create a Listing
1. Sign up / Log in
2. Click "Create Listing"
3. Fill in details (title, description, price, location)
4. Upload property image
5. Click "Add"
6. View your listing on the home page

### Leave a Review
1. Click on any listing
2. Scroll to "Leave a Review"
3. Select star rating
4. Write your comment
5. Submit
6. Review appears instantly

## 🐛 Troubleshooting

### MongoDB Connection Error
- Verify `ATLASDB_URL` in `.env`
- Check if IP is whitelisted in MongoDB Atlas

### Image Upload Not Working
- Verify Cloudinary credentials
- Check image file format (png, jpg, jpeg)

### "Cannot find module" Error
- Run `npm install`
- Delete `node_modules` and `package-lock.json`, then reinstall

## 📄 License

This project is open source and available under the ISC License.

## 👤 Author

**Dheeraj Kumar**
- GitHub: [@dheeraj938](https://github.com/dheeraj938)
- Email: dheeraj202107@gmail.com

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

## 📞 Support

For issues or questions, please open an issue on the [GitHub repository](https://github.com/dheeraj938/WanderLust_project).

---

**Happy Traveling with WanderLust! 🌍✈️**

run node app.js 

