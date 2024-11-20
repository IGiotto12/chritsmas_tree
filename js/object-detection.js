const video = document.getElementById('camera');
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

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

function detectObject(imageData) {
  model.detect(canvas).then((predictions) => {
    predictions.forEach((prediction) => {
      if (prediction.class === 'cup') { // Replace 'object_name' with your target
        triggerMessage(prediction.class);
      }
    });
  });
}

function triggerMessage(object) {
  alert(`It's a ${object}`);
}

predictions.forEach((prediction) => {
  context.strokeStyle = 'red';
  context.lineWidth = 5;
  context.strokeRect(...prediction.bbox);
  context.font = '18px Arial';
  context.fillStyle = 'red';
  context.fillText(prediction.class, prediction.bbox[0], prediction.bbox[1] - 10);
});