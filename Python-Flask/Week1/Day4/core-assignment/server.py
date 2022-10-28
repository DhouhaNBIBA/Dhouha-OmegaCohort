from flask import Flask,render_template 
app= Flask(__name__)
@app.route("/")
def main():
    return render_template('index.html')

@app.route('/play/<int:x>')
def play(x):
    return render_template('play.html', plays=plays)

@app.route('/play/<int:x>/<string:color>')
def changer_color(x,color):
    return render_template('color.html',plays=plays,couleur=coleur)

if __name__==('__main__'):
    app.run(debug=True)

