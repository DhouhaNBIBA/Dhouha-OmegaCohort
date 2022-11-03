from flask import Flask, render_template, request, session, redirect
app= Flask(__name__)

app.secret_key=("Dhouha")
@app.route('/')
def index():
    if "count" not in session:
        session["count"] = 0
    else:
        session['count'] += 1
    
    return render_template("index.html")

@app.route( "/destroy_session")
def destroy(): 
    session.clear()		# clears all keys
    return redirect("/")















if __name__== '__main__':
    app.run(debug=True)
