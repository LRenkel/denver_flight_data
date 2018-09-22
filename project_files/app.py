from flask import Flask, render_template
from flask import jsonify
from flask import request

app = Flask(__name__)

@app.route('/', methods=['GET'])
def homepage():
  return render_template("index.html") 
  
@app.route('/DEN_routes', methods=['GET'])
def routes():
  return render_template("DEN_routes.html") 

# @app.route('/analysis', methods=['GET'])
# def analysis():
#   return render_template("analysis.html") 

app.run(debug=True, port=5545)