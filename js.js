const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  if (e.target.matches('.next')) {
    const firstItem = slider.querySelector('.item');
    slider.appendChild(firstItem);
  } else if (e.target.matches('.prev')) {
    const lastItem = slider.querySelector('.item:last-child');
    slider.prepend(lastItem);
  }
}

document.addEventListener('click', activate);

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models')
]).then(start);

// Function to start face detection
function start() {
    // Get reference to the input image
    const inputImage = document.getElementById('inputImage');

    // Detect faces in the input image
    faceapi.detectAllFaces(inputImage).then((faces) => {
        // If faces are detected
        if (faces.length > 0) {
            // Calculate the center of the first detected face
            const centerX = faces[0].detection.box.x + faces[0].detection.box.width / 2;
            const centerY = faces[0].detection.box.y + faces[0].detection.box.height / 2;

            // Adjust scroll to center the face
            window.scrollTo(centerX, centerY);
        }
    });
}
console.log('Script executed!');


window.addEventListener('load', function() {
    // Get reference to the audio element
    const audio = document.getElementById('myAudio');
    
    // Play the audio
    audio.play('myaudio');
});