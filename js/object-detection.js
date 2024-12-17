const video = document.getElementById('camera');
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

// Open back camera
navigator.mediaDevices.getUserMedia({
  video: { facingMode: { exact: "environment" } }
})
.then((stream) => {
  video.srcObject = stream;
})
.catch((error) => {
  console.error('Camera access failed:', error);
});

let model;
cocoSsd.load().then((loadedModel) => {
  model = loadedModel;
});

function detectObject() {
  if (!model) return; // Wait for model to load

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  model.detect(canvas).then((predictions) => {
    const scannerOverlay = document.querySelector('.scanner-overlay');
    
    // Look for person detection
    const personDetected = predictions.some(prediction => 
      prediction.class === 'person' && prediction.score > 0.7 // Add confidence threshold
    );

    if (personDetected) {
      triggerMessage('person');
      scannerOverlay.style.borderColor = "green";
    } else {
      scannerOverlay.style.borderColor = "red";
    }

    // Draw bounding boxes (optional)
    predictions.forEach((prediction) => {
      context.strokeStyle = 'red';
      context.lineWidth = 5;
      context.strokeRect(...prediction.bbox);
      context.font = '18px Arial';
      context.fillStyle = 'red';
      context.fillText(
        `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
        prediction.bbox[0], 
        prediction.bbox[1] - 10
      );
    });
  });
}

// Reduce frequency of detection to every 500ms
setInterval(detectObject, 500);

function triggerMessage(object) {
  alert(`I found ${object}`);

  document.getElementById("camera").style.display = "none";
}
