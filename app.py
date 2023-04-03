from flask import Flask, request, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from dataclasses import dataclass

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite"
cors = CORS(app)
db = SQLAlchemy(app)


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(300), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)


@dataclass
class Data(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.String(100), unique=True, nullable=False)

class Packages(db.Model):
   id = db.Column('package_id', db.Integer, primary_key = True)
   name = db.Column(db.String(100))
   district = db.Column(db.String(100))  
   place = db.Column(db.String(200))
   price = db.Column(db.String(10))
   discription = db.Column(db.String(100))
   image = db.Column(db.String(100))

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

        
        admin = Users.query.filter_by(username= username).first()
        if admin:
            if admin.username == "admin":
                if admin.password == "admin@123":
                    return "Admin"
            
            else:
                if admin.username == username:
                    if admin.password == password:
                        return "True"
                    else :
                        return "Ooppss!! incorrect password"
        else:
            return "User not found"


@app.route("/update", methods=["GET", "POST"])
def update_view():
    if request.method == "POST":
        print(request.json)
        data = request.json["body"]["data"]

        try:
            update = Data(data=data)
            db.session.add(update)
            db.session.commit()
            return ""
        except:
            return " "

@app.route("/data_update", methods=['GET'])
def data_update():
    get_update = Data.query.all()
    update_list = []
    for update in get_update:
        update_dict = {
            'id': update.id,
            'update': update.data,
        }
        update_list.append(update_dict)
    return jsonify(update_list)




@app.route("/get", methods=['GET'])
def get_datas():
    datas = Data.query.all()
    return jsonify([data.data for data in datas])


@app.route('/data',methods=["GET","POST"])
def Data_view():
    if request.method == "POST":
        name = request.json["body"]["name"]  
        district = request.json["body"]["district"]
        place = request.json["body"]["place"]
        price = request.json["body"]["price"]
        discription = request.json["body"]["discription"]
        image = request.json["body"]["image"]

    try:
        Data = Packages(name=name, district=district, place=place, price=price, discription=discription, image=image)
        db.session.add(Data)
        db.session.commit()
        return "Success"
    
    except:
        return "Fail"

@app.route("/data_view", methods=['GET'])
def data_package():
    get_package = Packages.query.all()
    package_list = []
    for package in get_package:
        package_dict = {
            'id': package.id,
            'name': package.name,
            'district': package.district,
            'place': package.place,
            'price': package.price,
            'discription': package.discription,
            'image': package.image
        }
        package_list.append(package_dict)
    return jsonify(package_list)



if __name__ == "__main__":
    app.run(debug=True)

