from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from app.models.user import User
from app.utils.db import db

bp = Blueprint('users', __name__, url_prefix='/users')

# Obtener todos los usuarios
@bp.route('/', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([{'id': u.id, 'username': u.user} for u in users])

# Obtener un usuario por ID
@bp.route('/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'message': 'Usuario no encontrado'}), 404
    return jsonify({'id': user.id, 'username': user.username})

# Crear un nuevo usuario
@bp.route('/', methods=['POST'])
def create_user():
    data = request.json
    hashed_password = generate_password_hash(data['password'])
    new_user = User(user=data['username'], password=hashed_password)

    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'Usuario creado exitosamente'}), 201

# Actualizar usuario
@bp.route('/<int:user_id>', methods=['POST'])
def update_user(user_id):
    data = request.json
    user = User.query.get(user_id)

    if not user:
        return jsonify({'message': 'Usuario no encontrado'}), 404

    user.username = data.get('username', user.username)
    if 'password' in data:
        user.password = generate_password_hash(data['password'])

    db.session.commit()
    return jsonify({'message': 'Usuario actualizado exitosamente'})

# Eliminar usuario
@bp.route('/<int:user_id>', methods=['GET'])
def delete_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'message': 'Usuario no encontrado'}), 404

    db.session.delete(user)
    db.session.commit()
    return jsonify({'message': 'Usuario eliminado exitosamente'})
