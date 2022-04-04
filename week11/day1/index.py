import flask

app = flask.Flask(__name__)


@app.route('/blog')
def welcome_users():
    my_template = None
    with open('homepage.html', 'r') as f:
        my_template = f.read()

    return flask.render_template_string(my_template)


if __name__ == "__main__":
    app.run(debug=True, port=5001)
