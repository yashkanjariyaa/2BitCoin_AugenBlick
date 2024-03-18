
import os
from  flask_cors import CORS 
from flask import Flask, render_template, request, jsonify
import cv2
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.applications.resnet50 import preprocess_input
from tensorflow.keras.preprocessing import image

app = Flask(__name__)
CORS(app, resources={r"/classify": {"origins": "http://localhost:5173"}})

# Load the trained ResNet50 model
model = load_model('trained_resnet50_model.h5')

# Define directory to save uploaded images
UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def calculate_points(waste_type, family_size):
    # Define points for each waste category (adjusted)
    points_mapping = {
        "cardboard": 7,
        "paper":7,
        "glass": 6,
        "metal": 6,
        "plastic": 4,
        "trash": 4,
        "organic": 3,
        "e_waste": 1
    }
    
    # Adjust points based on family size
    adjusted_points = points_mapping[waste_type] // family_size
    
    return adjusted_points

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/classify', methods=['POST'])
def classify():
    # Check if the post request has the file part
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    # Get the uploaded image file
    uploaded_file = request.files['image']

    # Check if the file is empty
    if uploaded_file.filename == '':
        return jsonify({'error': 'No image selected'}), 400

    # Save the uploaded image to the uploads folder
    img_path = os.path.join(app.config['UPLOAD_FOLDER'], uploaded_file.filename)
    uploaded_file.save(img_path)

    # Preprocess the image
    img = image.load_img(img_path, target_size=(224, 224))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    processed_img_array = preprocess_input(img_array)

    # Make predictions using the model
    predictions = model.predict(processed_img_array)

    # Decode predictions
    predicted_label = np.argmax(predictions)
    categories = ['cardboard', 'glass', 'metal', 'paper', 'plastic', 'trash']
    predicted_category = categories[predicted_label]

    # Get family size from form data
    family_size = request.form.get('family_size')

    # Check if family size is provided and valid
    if not family_size or not family_size.isdigit() or int(family_size) <= 0:
        return jsonify({'error': 'Invalid family size'}), 400

    # Calculate points
    points = calculate_points(predicted_category, int(family_size))

    # Return predicted category and points as JSON response
    print("This is point: ",predicted_category)
    return jsonify({'predicted_category': predicted_category, 'points': points})


if __name__ == '__main__':
    app.run(debug=True)