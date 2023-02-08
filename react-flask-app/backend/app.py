import os
from flask import Flask, render_template, request
from reverseProxy import proxyRequest
# from classifier import classifyImage
from tensorflow.keras.models import load_model
import pandas as pd
import numpy as np
import nltk
from sklearn.feature_extraction.text import CountVectorizer
from nltk.corpus import stopwords
nltk.download('stopwords')
from sklearn.model_selection import train_test_split


MODE = os.getenv('FLASK_ENV')
DEV_SERVER_URL = 'http://localhost:3000/'

app = Flask(__name__)

#  model
# # model = pickle.load(open('file-name.pkl', 'rb'))
# json_file = open('backend\models\cnn_model.json', 'r')
# loaded_model_json = json_file.read()
# json_file.close()
# cnn_model = model_from_json(loaded_model_json)
# # load weights into new model
# cnn_model.load_weights("backend\models\cnn_model.h5")

cnn_model = load_model('D:/CSEngg/SQLinjection/react-flask-app\/backend/models/saveModel')
# cnn_model.summary()

df = pd.read_csv("D:/CSEngg/SQLinjection/react-flask-app/backend/models/data/sqli.csv", encoding='utf-16')
X = df['Sentence']
y = df['Label']
vectorizer = CountVectorizer(min_df = 2, max_df = 0.8, stop_words = stopwords.words('english'))
X = vectorizer.fit_transform(X.values.astype('U')).toarray()
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2)

# Ignore static folder in development mode.
if MODE == "development":
    app = Flask(__name__, static_folder=None)

@app.route('/')
@app.route('/<path:path>')
def index(path=''):
    if MODE == 'development':
        return proxyRequest(DEV_SERVER_URL, path)
    else:
        return render_template("index.html") 

# @app.route('/classify', methods=['POST'])
# def classify():
#     if (request.files['image']): 
#         file = request.files['image']

#         result = classifyImage(file)
#         print('Model classification: ' + result)        
#         return result

@app.route("/predict", methods=['POST'])
def predict():
    query = request.form['query']
    print(query)
    # result = query
    # result = cnn_model.predict(query.reshape(-1,1,4717)).flatten()
    # print(result)
    single_string = [query]
    single_string_vector = vectorizer.transform(single_string).toarray()
    single_string_tensor = np.array(single_string_vector, dtype=np.float32)
    result = cnn_model.predict(single_string_tensor.reshape(-1,1,4717))
    return result