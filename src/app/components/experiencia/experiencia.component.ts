import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: any;

  constructor(public portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getExperiencia().subscribe(data => {this.experiencia = data});
  }

}
