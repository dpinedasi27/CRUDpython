from flask import Blueprint, request, jsonify

bp = Blueprint('auth', __name__, url_prefix='/auth')

@bp.route('/login', methods=['POST'])
def login():
    data = request.json
    if data['username'] == 'admin' and data['password'] == 'admin':
        return jsonify({'message': 'Login successful', 'token': 'fake-jwt-token'}), 200
    return jsonify({'message': 'Invalid credentials'}), 401