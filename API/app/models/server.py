from app.utils.db import db

class Server(db.Model):
    __tablename__ = 'servidores'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)
    OS = db.Column(db.String(20), nullable=False)
    ram = db.Column(db.Integer, nullable=False)
    capacity = db.Column(db.Integer, nullable=False)
    ip = db.Column(db.String(25), unique=True, nullable=False)
    state = db.Column(db.String(20), nullable=False)