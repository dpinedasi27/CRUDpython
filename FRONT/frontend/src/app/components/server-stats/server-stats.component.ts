import { Component } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-server-stats',
  standalone: true,
  imports: [CommonModule],  // Importar CommonModule para *ngFor
  templateUrl: './server-stats.component.html',
  styleUrls: ['./server-stats.component.css']
})
export class ServerStatsComponent {
  totalServers = 0;
  osDistribution: { name: string, count: number }[] = [];

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.serverService.getServers().subscribe(servers => {
      this.totalServers = servers.length;

      // Calcular distribución por OS
      const osMap: { [key: string]: number } = {};
      servers.forEach(server => {
        osMap[server.OS] = (osMap[server.OS] || 0) + 1;
      });

      this.osDistribution = Object.keys(osMap).map(os => ({
        name: os,
        count: osMap[os]
      }));
    });
  }
}
