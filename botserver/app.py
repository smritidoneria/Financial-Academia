from flask import Flask, jsonify, request
from flask_cors import CORS
import google.generativeai as genai
import yfinance as yf
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Set Gemini API key
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
models = genai.list_models()
for model in models:
    print(model.name)

def get_hist_data(symbol):
    stock = yf.Ticker(symbol)
    hist = stock.history(period="1y")
    hist.reset_index(inplace=True)
    hist['Date'] = hist['Date'].dt.strftime('%Y-%m-%d')
    return hist.to_json(orient='records')

@app.route('/get_historical_data', methods=['GET'])
def get_historical_data():
    symbol = request.args.get('symbol')
    if not symbol:
        return jsonify({"error": "Symbol parameter is missing"}), 400
    try:
        historical_data = get_hist_data(symbol)
        return historical_data
    except Exception as e:
        return jsonify({"error": str(e)}), 500

def chatwithbot(txt: str):
    """ Generate a response from Gemini (Google AI) """
    model = genai.GenerativeModel("gemini-1.5-pro-latest")  # Use gemini-1.5-pro if available
    response = model.generate_content(f"You're a multilingual financial assistant. Answer in the same language: {txt}")
    return response.text.strip()

@app.route('/chat', methods=["POST"])
def chat():
    try:
        txt = request.form['text']
        response = chatwithbot(txt)
        return jsonify(response)
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
