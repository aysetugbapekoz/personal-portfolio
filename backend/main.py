from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import cv2
import numpy as np
from PIL import Image
import io

# FastAPI app
app = FastAPI(title="Profile Image Processing Service (MVP)")

# CORS (frontend için – şimdilik serbest)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root endpoint (404 olmasın diye)
@app.get("/")
def root():
    return {
        "service": "Profile Image Processing Service",
        "status": "running"
    }

# Health check (profesyonel backend standardı)
@app.get("/health")
def health():
    return {"status": "ok"}

# Image processing endpoint
@app.post("/process-image")
async def process_image(file: UploadFile = File(...)):
    # Dosya gerçekten image mi?
    if not file.content_type.startswith("image/"):
        return {"error": "Uploaded file is not an image"}

    image_bytes = await file.read()
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    img = np.array(image)

    # Center crop (square)
    h, w, _ = img.shape
    m = min(h, w)
    x0 = (w - m) // 2
    y0 = (h - m) // 2
    img = img[y0:y0 + m, x0:x0 + m]

    # Resize
    img = cv2.resize(img, (512, 512))

    # Quality metrics
    gray = cv2.cvtColor(img, cv2.COLOR_RGB2GRAY)
    blur_score = cv2.Laplacian(gray, cv2.CV_64F).var()
    brightness = float(np.mean(gray))

    return {
        "message": "Image processed successfully",
        "blur_score": round(float(blur_score), 2),
        "brightness": round(brightness, 2),
        "output_size": [512, 512]
    }


