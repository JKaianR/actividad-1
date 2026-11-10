# # importamos flask
# from flask import Flask
# from flask_cors import CORS
# app=Flask(__name__)
# CORS(app)



# ## Ahora tomamos la segunda ruta y la reemplazamos por el siguiente ejemplo
# ## 1.) Haga un programa que calcule el promedio de notas sabiendo que tienen un valor de
# ## 30%, 30% y 40% respectivamente.
# @app.route("/notas")
# @app.route("/notas/<float:nota1>/<float:nota2>/<float:nota3>")
# def notas(nota1=0, nota2=0, nota3=0):
#     resultado = (nota1*30)/100 + (nota2*30)/100 + (nota3*40)/100
#     return f"<h1>El resultado es: {resultado}</h1> <hr>"

# ## Tomamos la tercera ruta y la reemplazamos por el siguiente ejemplo
# ## 2.) Un programa que al capturar la edad de una persona diga si es:
# ## Menor de edad (Menor a 18 años)
# ## Adulto (Mayor o igual a 18 años y menor a 60 años)
# ## Adulto mayor (Mayor o igual a 60 años)
# @app.route("/edades")
# @app.route("/edades/<int:edad>")
# def edades(edad=0):
#     if edad < 18:
#         R = "menor de edad"
#     elif edad < 60:
#         R = "Adulto"
#     else:
#         R = "Adulto mayor"
#     return f"<h1>La persona es: {R}</h1> <hr>"

# ## Importamos flask
# from flask import Flask
# ## Importamos la libreria numpy si no existe la instalamos con: pip install numpy
# import numpy as np

# app = Flask(__name__)

# ## Definimos la ruta principal
# @app.route("/")
# def HolaFlask():
#     return "<h1>¡Hola Flask!</h1> <hr>"

# ## Creamos otra ruta y realizamos el siguiente ejemplo
# ## 3.) Programa que crea arreglos con valores aleatorios
# @app.route("/arreglos")
# @app.route("/arreglos/<int:valores>/<int:columnas>")
# @app.route("/arreglos/<int:valores>/<int:columnas>/<int:filas>")
# def arreglos(valores=0, columnas=0, filas=0):
#     if filas == 0:
#         arreglo = np.random.randint(valores, size=columnas)
#     else:
#         arreglo = np.random.randint(valores, size=(filas, columnas))
        
#     return f"<h1>El arreglo aleatorio es: {arreglo}</h1> <hr>"

# if __name__ == '__main__':
#     ## El valor True indica que la app se deja en modo debug
#     app.run(debug=True)



from flask import Flask
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app)  # Habilitamos CORS para permitir peticiones desde el frontend

# 1. Ruta principal (Mensaje)
@app.route("/")
def HolaFlask():
    return "<h1>¡Hola Flask desde el SENA!</h1> <hr>"

# 2. Ruta para calcular notas (30%, 30% y 40%)
@app.route("/notas")
@app.route("/notas/<float:nota1>/<float:nota2>/<float:nota3>")
def notas(nota1=0, nota2=0, nota3=0):
    resultado = (nota1 * 30) / 100 + (nota2 * 30) / 100 + (nota3 * 40) / 100
    return f"<h1>El resultado del promedio es: {resultado:.2f}</h1> <hr>"

# 3. Ruta para evaluar la edad
@app.route("/edades")
@app.route("/edades/<int:edad>")
def edades(edad=0):
    if edad < 18:
        R = "menor de edad"
    elif edad < 60:
        R = "Adulto"
    else:
        R = "Adulto mayor"
    return f"<h1>La persona es: {R}</h1> <hr>"

# 4. Ruta para crear arreglos con NumPy
@app.route("/arreglos")
@app.route("/arreglos/<int:valores>/<int:columnas>")
@app.route("/arreglos/<int:valores>/<int:columnas>/<int:filas>")
def arreglos(valores=0, columnas=0, filas=0):
    if filas == 0:
        arreglo = np.random.randint(valores, size=columnas)
    else:
        arreglo = np.random.randint(valores, size=(filas, columnas))
        
    return f"<h1>El arreglo aleatorio es: <br>{str(arreglo)}</h1> <hr>"

if __name__ == '__main__':
    app.run(debug=True)














# ## Definimos una segunda ruta
# @app.route("/ruta2")
# def ruta2():
#     return "<strong> Estamos en la segunda ruta </strong> <hr>"

# ## Definimos una tercera ruta
# @app.route("/ruta3")
# def ruta3():
#     return "<em> Estamos en la tercera ruta </em> <hr>"

# if __name__ == '__main__':
#     ## El valor True indica que la app se deja en modo debug
#     app.run(debug=True)