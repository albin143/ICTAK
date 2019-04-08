from flask import Flask
app=Flask(__name__)
@app.route("/")
def greeting():
	return"<marquee><h1 style='color:red;'>hello world!yooo yoo</h1></marquee>"
if __name__=="__main__":
	app.run(host='127.0.0.1')

