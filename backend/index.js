const express = require('express');
const app = express();
const http = require('http');
const port = 3005;

console.log(http.STATUS_CODES)



app.get('/home', (req, res) => {
    res.send(`
        <h1 style="font-size: 3rem; font-family: Arial, sans-serif; color: #333;">
            Home Page
        </h1>

        <style>
            @keyframes colorChange {
                0% {
                    color: #333;  /* Initial color */
                }
                25% {
                    color: #ff6347;  /* First color */
                }
                50% {
                    color: #4caf50;  /* Second color */
                }
                75% {
                    color: #00bcd4;  /* Third color */
                }
                100% {
                    color: #333;  /* Back to initial color */
                }
            }
            
            h1 {
                animation: colorChange 5s infinite;
            }
        </style>
    `);
});


app.listen(port, () => console.log(`Listening on port ${port}`));
