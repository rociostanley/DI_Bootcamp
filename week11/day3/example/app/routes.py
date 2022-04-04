import flask
import database_manager # this is our module

app = flask.Flask(__name__)
database_manager.create_database()
@app.route("/")
@app.route("/products")
def products_page():
    data = database_manager.load_database()
    template_file = open('my_template.jinja', 'r').read()
    css = open('style.css', 'r').read()

    return """
        Currently, we don't have any product to sell, sorry!
    """

app.run(debug=True)