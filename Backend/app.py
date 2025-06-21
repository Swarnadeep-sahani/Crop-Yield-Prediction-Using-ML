from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load model and encoders
model_data = joblib.load('crop_yield_model_full.pkl')
pipeline = model_data['pipeline']
label_encoders = model_data['label_encoders']
feature_order = model_data['feature_order']

# Crop-specific yield limits (kg/ha) - adjust based on agricultural knowledge
CROP_YIELD_LIMITS = {
    'Cotton': 2000,
    'Wheat': 6000,
    'Rice': 5000,
    'Barley': 4000,
    'Soybean': 3000,
    'Default': 10000  # For crops not listed
}

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        
        # Validate required fields
        required_fields = ['crop', 'season', 'state', 'crop_year', 
                         'area', 'production', 'annual_rainfall', 
                         'fertilizer', 'pesticide']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing field: {field}'}), 400

        # Check for valid crop/state/season
        valid_crops = list(label_encoders['crop'].classes_)
        valid_states = list(label_encoders['state'].classes_)
        valid_seasons = list(label_encoders['season'].classes_)
        
        if data['crop'] not in valid_crops:
            return jsonify({'error': f'Invalid crop. Valid options: {valid_crops}'}), 400
        if data['state'] not in valid_states:
            return jsonify({'error': f'Invalid state. Valid options: {valid_states}'}), 400
        if data['season'] not in valid_seasons:
            return jsonify({'error': f'Invalid season. Valid options: {valid_seasons}'}), 400

        # Prepare input data
        input_data = pd.DataFrame([{
            'Crop': data['crop'].strip(),
            'Season': data['season'].strip(),
            'State': data['state'].strip(),
            'Crop_Year': int(data['crop_year']),
            'Area': float(data['area']),
            'Production': float(data['production']),
            'Annual_Rainfall': float(data['annual_rainfall']),
            'Fertilizer': float(data['fertilizer']),
            'Pesticide': float(data['pesticide'])
        }])

        # Label encoding
        input_data['Crop'] = label_encoders['crop'].transform(input_data['Crop'])
        input_data['State'] = label_encoders['state'].transform(input_data['State'])
        input_data['Season'] = label_encoders['season'].transform(input_data['Season'])

        # Ensure column order
        input_data = input_data[feature_order]

        # Calculate input yield ratio (for sanity check)
        input_yield_kg_ha = (input_data['Production'][0] / input_data['Area'][0]) * 1000

        # Predict
        prediction_tons = pipeline.predict(input_data)[0]
        prediction_kg = prediction_tons * 1000

        # Apply crop-specific yield limits
        max_yield = CROP_YIELD_LIMITS.get(data['crop'], CROP_YIELD_LIMITS['Default'])
        clamped_yield = min(prediction_kg, max_yield)

        # Determine status
        status = (
            "Excellent" if clamped_yield > 3000 else
            "Good" if clamped_yield > 2000 else
            "Needs improvement"
        )

        return jsonify({
            'prediction_tons_per_ha': round(prediction_tons, 2),
            'prediction_kg_per_ha': round(clamped_yield, 2),
            'status': status,
            'message': f"{round(clamped_yield, 0):,.0f} kg/ha - {status} yield",
            'input_yield_kg_ha': round(input_yield_kg_ha, 2)  # For debugging
        })

    except ValueError as e:
        return jsonify({'error': f"Invalid input: {str(e)}"}), 400
    except Exception as e:
        return jsonify({'error': f"Server error: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)