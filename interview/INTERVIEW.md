Wanderlust – Interview Ready (Improved & Simple)
30-Second Introduction (Say This)

“Wanderlust is my second project.
It is an Airbnb-like property rental website.
Users can sign up, login, create property listings, upload images, and add reviews.
I used Node.js, Express, MongoDB, and Passport.js for authentication.
Images are stored on Cloudinary.”

Top Interview Questions (BEST & SIMPLE)
Q1: What is Wanderlust?

Answer:
“Wanderlust is a property rental platform like Airbnb.
Users can list properties, browse listings, upload images, and write reviews.”

Q2: Which technologies did you use?

Answer:
“I used Node.js and Express for backend, MongoDB for database,
EJS for frontend templates, Passport.js for login,
Multer and Cloudinary for image upload, and Joi for validation.”

Q3: How does login work?

Answer:
“User enters email and password.
Passport checks the details.
If correct, a session is created and stored in MongoDB.
User stays logged in using session cookie.”

Q4: How do you upload images?

Answer:
“Multer first takes the image.
Then the image is uploaded to Cloudinary.
Cloudinary gives an image URL.
That URL is saved in MongoDB.”

Q5: How do you stop other users from editing listings?

Answer:
“I check if the logged-in user ID matches the listing owner ID.
If not, edit or delete is not allowed.”

Q6: What is middleware?

Answer:
“Middleware is a function that runs before the main request.
Example: checking login, validating data, handling errors.”

Q7: Why MongoDB?

Answer:
“MongoDB is flexible.
Different properties can have different fields.
It works well with JavaScript.”

Q8: How do you validate data?

Answer:
“I use Joi on server side to check title, price, and other fields.
This protects the database from wrong data.”

Q9: How are reviews connected to listings?

Answer:
“One listing can have many reviews.
Each review stores the listing ID.
When a listing is deleted, its reviews are also deleted.”

Q10: What is MVC pattern?

Answer:
“Model is database,
View is EJS pages,
Controller has logic.
It keeps code clean and organised.”

Security (Say Confidently)

Passwords are hashed

Login uses sessions

Only owners can edit/delete

Data is validated before saving

Improvements You Can Say (VERY IMPORTANT)

“In future, I want to add booking system, search filters, payments, and user profiles.”

Chat Application – Interview Version (Improved)
30-Second Introduction

“I built a real-time chat application like WhatsApp.
Users can register, login, search users, and send messages instantly.
Frontend is React, backend is Node.js and MongoDB.
Real-time messaging is done using Socket.io.
Passwords are stored securely.”



Q3: What is JWT?

Answer:
“JWT is a token that proves user is logged in.
It is sent with every request to verify the user.”