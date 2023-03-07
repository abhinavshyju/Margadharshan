from flask import Flask, request, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite"
cors = CORS(app)
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
        print(request.json)
        username = request.json["body"]["username"]
        password = request.json["body"]["password"]
        email = request.json["body"]["email"]

        try:
            user = Users(username=username, password=password, email=email)
            db.session.add(user)
            db.session.commit()
            return "Success"
        except:
            return "User alredy exist"


@app.route("/login", methods=["GET", "POST"])
def signin_view():
    if request.method == "POST":
        username = request.json["body"]["username"]
        password = request.json["body"]["password"]

        found = Users.query.filter_by(username=username).first()
        if found:
            if found.password == password:
                return "True"
            else :
                return "Ooppss!! incorrect password"
        else:
            return "User not found"


if __name__ == "__main__":
    app.run(debug=True)
