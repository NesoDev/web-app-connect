from flask import Flask, jsonify, request, render_template

app = Flask(__name__)

# Ruta de la página de inicio
@app.route("/")
def home():
    return render_template("index.html")

# Ruta para procesar datos
@app.route("/api/data", methods=["POST"])
def index():
    data = request.json.get("listNumbers")  # Obtenemos los datos como JSON
    data = data.split(", ")
    lst = [int(x) for x in data]
    lst.sort()
    lst_sort = ", ".join(map(str, lst))
    return jsonify({"lst_sort": lst_sort})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5020, debug=True)