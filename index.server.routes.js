 /* 
   File Name: index.js
   Student’s Name: Arshil Shingala
   StudentID: 301318550
   Date: 09/24/2023
*/

// ====================== IMPORTS ======================
const express = require('express');
const router = express.Router();

// ====================== ROUTES ======================

// HOME PAGE
router.get(['/', '/home'], (req, res) => {
    console.log('Accessing Home Page');
    res.render('home', { title: 'Home' });
});

// ABOUT PAGE
router.get('/about', (req, res) => {
    res.render('about', { title: 'About Me' });
});

// PROJECTS PAGE
router.get('/projects', (req, res) => {
    res.render('projects', { title: 'Projects' });
});

// SERVICES PAGE
router.get('/services', (req, res) => {
    res.render('services', { title: 'Services' });
});

// CONTACT PAGE
router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Me' });
});

// In your routes file
router.get('/test', (req, res) => {
    res.send('Test route is working');
});

module.exports = router;
