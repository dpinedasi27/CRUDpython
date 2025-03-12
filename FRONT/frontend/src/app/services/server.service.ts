import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private apiUrl = 'http://127.0.0.1:5000/servers';

  constructor(private http: HttpClient) {}

  // Obtener todos los servidores
  getServers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/`);
  }

  // Obtener un servidor por ID
  getServer(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Agregar un nuevo servidor
  addServer(server: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/`, server);
  }

  // Editar un servidor existente
  updateServer(id: number, server: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/edit/${id}`, server);
  }

  // Eliminar un servidor
  deleteServer(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/delete/${id}`);
  }

  // Cambiar el estado de un servidor (activo/inactivo)
  changeServerStatus(id: number, state: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/change/state/${id}`, { state });
  }
}
