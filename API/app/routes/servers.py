from flask import Blueprint, request, jsonify
from app.services.servidores_service import get_all_servers, create_server, get_server_by_id, update_server, delete_server, change_server_state

bp = Blueprint('servers', __name__, url_prefix='/servers')

@bp.route('/', methods=['GET'])
def get_servers():
    return get_all_servers()

@bp.route('/', methods=['POST'])
def add_server():
    data = request.json
    return create_server(data)

@bp.route('/<int:server_id>', methods=['GET'])
def get_server(server_id):
    return get_server_by_id(server_id)

@bp.route('/edit/<int:server_id>', methods=['POST'])
def edit_server(server_id):
    data = request.json
    return update_server(server_id, data)

@bp.route('/delete/<int:server_id>', methods=['GET'])
def remove_server(server_id):
    return delete_server(server_id)

@bp.route('/change/state/<int:server_id>', methods=['POST'])
def update_status(server_id):
    data = request.json
    return change_server_state(server_id, data['state'])