import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto: any;

  constructor(public portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getProyecto().subscribe(data => {this.proyecto = data});
  }

}
