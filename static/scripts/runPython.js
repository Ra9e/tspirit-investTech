// Load .env
require('dotenv').config();

// Import the Google Cloud Vision library
const vision = require('@google-cloud/vision');

// Create a client
const client = new vision.ImageAnnotatorClient();

client
    .textDetection('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.web5x.ru%2Fwp-content%2Fuploads%2F2018%2F03%2Fwidget-elementor-pro9.jpg&f=1&nofb=1')
    .then(results => {
        const result = results[0].textAnnotations;

        console.log(`Text Annotations Result: ${JSON.stringify(result, null, 2)}`);
    })
    .catch(err => {
        console.error('ERROR:', err);
    });
/*
const {spawn} = require('child_process')

const storage = [];
const py = spawn('python', ['main.py']);
function runPy() {
    py.stdout.on('data', function (data) {

        // convert Buffer object to Float
        storage.push(parseFloat(data));
        console.log(storage);
    });
}

const btn = document.getElementById('continue-button');
btn.addEventListener('click', function (event) {
runPy();
})
*/
