import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: any;

  constructor(public portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getEducacion().subscribe(data => {this.educacion = data});
  }

}