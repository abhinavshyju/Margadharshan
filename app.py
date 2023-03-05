from flask import Flask, request, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite"
bcrypt = Bcrypt(app)
db = SQLAlchemy(app)

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(300), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)

with app.app_context():
    db.create_all()

@app.route("/signup", methods=["GET", "POST"])
def signup_view():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        email = request.form["email"]

        try:
            user = Users(username=username, password=password, email=email)
            db.session.add(user)
            db.session.commit()
            return "Success"
        except:
            return "Failed"
        
@app.route("/signin", methods=["GET", "POST"])
def signin_view():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        email = request.form["email"]

        found = Users.query.filter_by(username=username).first()
        if found:
            return "True"
        else:
            return "False"

if __name__ == "__main__":
    app.run(debug=True)
