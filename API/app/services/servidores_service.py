from flask import jsonify
from app.models.server import Server
from app.utils.db import db

def get_all_servers():
    servers = Server.query.all()
    return jsonify([{'id': s.id, 'name': s.name, 'OS': s.OS, 'ram': s.ram, 'capacity': s.capacity, 'ip': s.ip, 'state': s.state} for s in servers])

def create_server(data):
    new_server = Server(name=data['name'], OS=data['OS'], ram=data['ram'], capacity=data['capacity'], ip=data['ip'], state=data['state'])
    db.session.add(new_server)
    db.session.commit()
    return jsonify({'message': 'Server added successfully'}), 201

def get_server_by_id(server_id):
    server = Server.query.get(server_id)
    if not server:
        return jsonify({'message': 'Server not found'}), 404
    return jsonify({'id': server.id, 'name': server.name, 'OS': server.OS, 'ram': server.ram, 'capacity': server.capacity, 'ip': server.ip, 'state': server.state})

def update_server(server_id, data):
    server = Server.query.get(server_id)
    if not server:
        return jsonify({'message': 'Server not found'}), 404
    
    server.name = data.get('name', server.name)
    server.OS = data.get('OS', server.OS)
    server.ram = data.get('ram', server.ram)
    server.capacity = data.get('capacity', server.capacity)
    server.ip = data.get('ip', server.ip)
    server.state = data.get('state', server.state)
    
    db.session.commit()
    return jsonify({'message': 'Server updated successfully'})

def delete_server(server_id):
    server = Server.query.get(server_id)
    if not server:
        return jsonify({'message': 'Server not found'}), 404
    
    db.session.delete(server)
    db.session.commit()
    return jsonify({'message': 'Server deleted successfully'})

def change_server_state(server_id, new_state):
    server = Server.query.get(server_id)
    if not server:
        return jsonify({'message': 'Server not found'}), 404
    
    server.state = new_state
    db.session.commit()
    return jsonify({'message': 'Server state updated successfully'})
