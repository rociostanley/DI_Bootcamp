import flask
from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return flask.render_template("articles.html")


if __name__ == '__main__':
    app.run(debug=True, port=5000)