from flask import Flask
from .utils.db import db
from .routes import auth, servers,users
from app.config import Config
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)
    from app.config import Config
    app.config.from_object(Config)

    # Verificar si SQLALCHEMY_DATABASE_URI se está cargando correctamente
    print("FLASK CONFIGURACIÓN - SQLALCHEMY_DATABASE_URI:", app.config["SQLALCHEMY_DATABASE_URI"])

    db.init_app(app)  # Inicializa SQLAlchemy
    
    # Registra las rutas
    app.register_blueprint(auth.bp)
    app.register_blueprint(servers.bp)
    app.register_blueprint(users.bp)
    
    return app
