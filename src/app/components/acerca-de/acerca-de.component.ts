import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: any;

  constructor(public portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getPersona().subscribe(data => {this.persona = data});
  }

}
