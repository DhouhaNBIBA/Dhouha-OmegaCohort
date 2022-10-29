from flask import Flask,render_template
app = Flask(__name__)
@app.route('/') 
def check():
    return  render_template('index.html',x=4,y=4,color1="green",color2="beige")

@app.route('/<int:x1>') 
def check2(x1):
    x2= x1//2

    return  render_template('4.html',x2=x2,color1="green",color2="beige")

@app.route('/<int:x1>/<int:y1>') 
def check3(x1,y1):
    x2= x1//2
    y2= y1//2

    return  render_template('xy.html',x2=x2,y2=y2,color1="green",color2="beige")

@app.route('/<int:x1>/<int:y1>/<string:color1>/<string:color2>') 
def check4(x1,y1,color1,color2):
    x2= x1//2
    y2= y1//2
    return  render_template('xy.html',x2=x2,y2=y2,color1=color1,color2=color2)




if __name__=="__main__":
    app.run(debug=True)


