const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/contactdance');
}

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});

const contactp = mongoose.model('contactp', contactSchema);

app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));

// Setting the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// GET endpoints
app.get('/', (req, res) => {
    res.status(200).render('home.pug');
});

app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug');
});

// POST endpoint for handling form submission
app.post('/contact', (req, res) => {
    var myData = new contactp(req.body);
    myData.save().then(() => {
        res.send("This form has been submitted");
    })
    .catch(() => {
        res.status(400).send("This form has not been submitted");
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
