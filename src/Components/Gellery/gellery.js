// index.js
const express = require('express');
const app = express();
const port = 3000;

const photos = [
  {
    id: 1,
    src: 'https://via.placeholder.com/150',
    alt: 'Photo 1'
  },
  {
    id: 2,
    src: 'https://via.placeholder.com/150',
    alt: 'Photo 2'
  },
  {
    id: 3,
    src: 'https://via.placeholder.com/150',
    alt: 'Photo 3'
  },
  // Add more photos as needed
];

app.get('/api/photos', (req, res) => {
  res.json(photos);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
