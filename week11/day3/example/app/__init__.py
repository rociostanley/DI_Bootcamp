import flask

flask_app = flask.Flask(__name__) # Remember: __name__ is the name of the file where the code is written

from app import routes
