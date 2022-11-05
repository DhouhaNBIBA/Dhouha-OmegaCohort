from flask import Flask, render_template, session, redirect,request
import random

app = Flask(__name__)

app.secret_key=("Dhouha")

@app.route('/')
def index():
    if "x" not in session:
        session["x"] = random.randint(1,100)
    return render_template('index.html')
@app.route('/guess',methods=['POST'])
def guess():
    session['guess'] = int(request.form['guess'])
    return redirect('/')

@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')





if __name__== '__main__':
    app.run(debug=True)