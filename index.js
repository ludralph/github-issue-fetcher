const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Set up a route to fetch and display GitHub issues
app.get('/issues/:owner/:repo', async (req, res) => {
    try {
        const { owner, repo } = req.params;
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/issues`;
    
        const response = await axios.get(apiUrl);
        const issues = response.data;
       
        res.render('issues', { issues });
      } catch (error) {
        console.error('Error fetching GitHub issues:', error);
        res.status(500).send('Error fetching GitHub issues.');
      }
});

// start the express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

