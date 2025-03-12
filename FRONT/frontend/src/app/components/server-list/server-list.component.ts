import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ServerService } from '../../services/server.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-server-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatInputModule, MatFormFieldModule, MatSelectModule, FormsModule],
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent {
  displayedColumns: string[] = ['name', 'OS', 'ram', 'disk', 'ip_address', 'state'];
  dataSource = new MatTableDataSource<any>([]);
  originalData: any[] = []; // Guardamos los datos originales
  searchTerm: string = '';
  filterState: string = '';

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.serverService.getServers().subscribe(servers => {
      this.originalData = servers;
      this.dataSource.data = servers;
    });
  }

  applyFilter() {
    this.dataSource.filter = this.searchTerm.trim().toLowerCase();
  }

  filterByState() {
    if (this.filterState === '') {
      this.dataSource.data = [...this.originalData];
    } else {
      this.dataSource.data = this.originalData.filter(server => 
        server.state.toString() === this.filterState
      );
    }
  }
}


