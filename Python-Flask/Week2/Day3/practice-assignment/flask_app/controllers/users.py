from flask import render_template,redirect,request
from flask_app import app
from flask_app.models.user import Users




# getALLUsers
@app.route("/")
def index():
    u=Users.get_all()
    print(r)
    return render_template("index.html",users=u)

#get One User
@app.route('/oneUser/<int:id>')
def oneUser(id):
    data ={ 
        "id":id
    }
    return render_template("one_robot.html",user=Users.oneUser(data))

#AddRobot Route to the template
@app.route("/newUser")
def Form():
    return render_template("new_robot.html")

#AddRobot to my Table 
@app.route('/newUser',methods=['POST'])
def newU():
    Users.AddUser(request.form)
    
    return redirect("/")




# #Update One Robot
# @app.route('/fixRobot/<int:id>')
# def fixRob(id):
#     data ={ 
#         "id_robot":id
#     }
#     return render_template("fixRobot.html",robot=Robots.oneRobot(data))

# # Update route when he finnish the Update
# @app.route('/fixRobot/hi',methods=['POST'])
# def update():
#     Robots.fixTheRobot(request.form)
#     return redirect('/')

# #delete Robot
# @app.route('/ByBydestroy/<int:id>')
# def destroy(id):
#     data ={
#         'id_robot': id
# }
#     Robots.destroy(data)
#     return redirect('/')