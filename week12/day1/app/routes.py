import flask
import app


@app.route("/")
def index():
    return flask.render_template('articles.html', posts=posts)