import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill: any;

  constructor(public portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getSkill().subscribe(data => {this.skill = data});
  }

}
