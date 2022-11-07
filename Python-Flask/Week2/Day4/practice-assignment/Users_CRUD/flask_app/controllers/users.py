from flask_app import app 
from flask import render_template, request, redirect
from flask_app.models.user import User


@app.route('/')
def index():

    list_users =User.get_all()
    
    return render_template('read.html', users = list_users)

@app.route('/user/new')
def new_user():
    return render_template('create.html')

@app.route('/users/create', methods=['POST'])
def create_user():
    user_id = User.create_user(request.form)
    return redirect(f'/users/{user_id}')

@app.route('/users/<int:id>') 
def one_user(id): 
    data={
        "id":id
    }
    return render_template('read_one.html', users = User.get_one(data))

@app.route('/users/<int:id>/edit')
def edit(id):
    data={
        "id":id
    }
    return render_template('edit.html',users = User.get_one(data))