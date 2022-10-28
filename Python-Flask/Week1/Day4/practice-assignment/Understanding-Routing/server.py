from flask import Flask
app = Flask(__name__)
@app.route('/')
def hello_world():
    return 'Hello World!'
@app.route('/dojo')
def dojo():
    return "Dojo!"
@app.route('/say/<name>')
def say(name):
    return f"Hi {name.title()}!"

@app.route('/repeat/<int:number>/<string:word>')
def repeat(number, word):
    rep=" "
    for i in range(0,number):
        rep+=f"{word}<br>"
    return rep
@app.errorhandler(404)
def page_not_found(error):
    return 'Sorry! No response. Try again.'









if __name__=="__main__":
    app.run(debug=True)


