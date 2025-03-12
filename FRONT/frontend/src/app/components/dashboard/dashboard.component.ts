import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerStatsComponent } from '../server-stats/server-stats.component';
import { ServerListComponent } from '../server-list/server-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ServerStatsComponent, ServerListComponent], // Importa los componentes
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent { }

