import numpy as np
import sys
import pickle

model = pickle.load(open('final_prediction.pickle', 'rb'))


def predict(argv):

    int_features = [int(x) for x in argv[1:]]
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)

    output = prediction[0]

    return output


if __name__ == '__main__':
    predict(sys.argv)


# app = Flask(__name__)
# from flask import Flask, request, jsonify, render_template


# @app.route('/')
# def home():
#     return render_template('index.html')


# @app.route('/predict', methods=['POST'])
# def predict():

#     int_features = [int(x) for x in request.form.values()]
#     final_features = [np.array(int_features)]
#     prediction = model.predict(final_features)

#     output = round(prediction[0], 2)

#     return render_template('index.html', prediction_text='This transaction is likely to be fraud in percentage by $ {}'.format(output))


# @app.route('/results', methods=['POST'])
# def results():

#     data = request.get_json(force=True)
#     prediction = model.predict([np.array(list(data.values()))])

#     output = prediction[0]
#     return jsonify(output)


# if __name__ == "__main__":
#     app.run(debug=True)
