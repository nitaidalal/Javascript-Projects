const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snapshot = document.getElementById('snapshot');
const snapButton = document.getElementById('snap');
const downloadLink = document.getElementById('download');
const filterSelect = document.getElementById('filter');
const switchCameraBtn = document.getElementById('switch-camera');

let currentStream;
let currentFacingMode = "user"; 

async function startCamera(facingMode = "user") {
  if (currentStream) {
    currentStream.getTracks().forEach(track => track.stop());
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: facingMode }
    });
    currentStream = stream;
    video.srcObject = stream;
  } catch (err) {
    console.error("Error accessing camera:", err);
    alert("Camera access failed.");
  }
}

// Start front camera on load
startCamera(currentFacingMode);


switchCameraBtn.addEventListener('click', () => {
  currentFacingMode = currentFacingMode === "user" ? "environment" : "user";
  startCamera(currentFacingMode);
});

filterSelect.addEventListener('change', () => {
  video.style.filter = filterSelect.value;
});

snapButton.addEventListener('click', () => {
    
  const context = canvas.getContext('2d');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.filter = filterSelect.value;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  const dataURL = canvas.toDataURL('image/png');
  snapshot.src = dataURL;
  downloadLink.href = dataURL;
});

downloadLink.addEventListener('click', (e) => {
  if (!snapshot.src) {
    e.preventDefault();
    alert("Please take a snapshot first.");
  }
});

snapButton.addEventListener('click', () => {
  alert("Snapshot taken! You can now download or view it below.");
});

    