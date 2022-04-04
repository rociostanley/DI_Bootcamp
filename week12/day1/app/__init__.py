import flask

# Remember: __name__ is the name of the file where the code is written
flask_app = flask.Flask(__name__)

from flask_app import routes