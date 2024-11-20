const video = document.getElementById('camera');
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');


// Open back camera
navigator.mediaDevices.getUserMedia({
  video: { facingMode: { exact: "environment" } }
})
.then((stream) => {
  document.getElementById('camera').srcObject = stream;
})
.catch((error) => {
  console.error('Camera access failed:', error);
});

// Periodically capture frames
setInterval(() => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

  // Process image data for object detection
  detectObject(imageData);
}, 100);

let model;
cocoSsd.load().then((loadedModel) => {
  model = loadedModel;
});

function detectObject() {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const video = document.getElementById('camera');

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  model.detect(canvas).then((predictions) => {
    const scannerOverlay = document.querySelector('.scanner-overlay');
    predictions.forEach((prediction) => {
      if (prediction.class === 'hand') { // Target object
        triggerMessage(prediction.class);
        scannerOverlay.style.borderColor = "green"; // Indicate success
      }
    });
  });
}

function triggerMessage(object) {
  alert(`I found ${object}`);

  document.getElementById("camera").style.display = "none";
}

predictions.forEach((prediction) => {
  context.strokeStyle = 'red';
  context.lineWidth = 5;
  context.strokeRect(...prediction.bbox);
  context.font = '18px Arial';
  context.fillStyle = 'red';
  context.fillText(prediction.class, prediction.bbox[0], prediction.bbox[1] - 10);
});