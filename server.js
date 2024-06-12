const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Pool } = require('pg');
require('dotenv').config();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
const PORT_NUMBER = process.env.PORT

app.use(express.static('public'));

// const pool = new Pool({
// 	connectionString: process.env.DATABASE_URL,
//   });

// // SQL query to create a table if it does not exist
// const createTableQuery = 
// `CREATE TABLE IF NOT EXISTS contact_us (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     email VARCHAR(255) NOT NULL,
//     phone_number VARCHAR(255),
//     msg_subject VARCHAR(255),
//     message TEXT NOT NULL
// );`;

// pool.query(createTableQuery, (err, res) => {
// 	if (err) {
// 	  console.error("Error creating table:", err);
// 	  return;
// 	}
// 	console.log("Table is ready or already exists");
//   });


app.get('/', (req, res) =>
{
	res.render('index.ejs');
});
app.get('/about', (req, res) =>
{
	res.render('about.ejs');
});

app.get('/blog-post', (req, res) =>
{
	res.render('blog-left-sidebar.ejs');
});

app.get('/contact', (req, res) =>
{
	res.render('contact.ejs');
});

app.get('/services', (req, res) =>
{
	res.render('services.ejs');
});

app.get('/blog', (req, res) =>
{
    res.render('blog-left-sidebar.ejs');
});

app.get('/not-found', (req, res) =>
{
    res.render('404.ejs');
});


app.listen(PORT_NUMBER, '0.0.0.0',()=>
{
    console.log('listening to port ', {PORT_NUMBER});
});
    
//receiving request from the forms
app.post('/submit', (req, res) => {
    console.log("Entered...../.")
    const data = {
        name: req.body.name,
        mail: req.body.email,
        phone_number: req.body.phone_number,
        msg_subject: req.body.msg_subject,
        message: req.body.message
    };
    pool.query('INSERT INTO contact_us (name, mail, phone_number, msg_subject, message) VALUES ($name, $email, $phone_number, $msg_subject, $message)', [data.name,data.mail,data.phone_number,data.msg_subject,data.message], (error) => {
        if (error) {
        console.error('Database insertion error:', error);
        throw error;
        }
        res.send("Data Send successfully!");

    });
    });