from flask import jsonify

def authenticate_user(data):
    if data['username'] == 'admin' and data['password'] == 'admin':
        return jsonify({'message': 'Login successful', 'token': 'fake-jwt-token'}), 200
    return jsonify({'message': 'Invalid credentials'}), 401