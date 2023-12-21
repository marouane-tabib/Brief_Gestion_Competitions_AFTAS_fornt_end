import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CompetitionsService } from "../../services/competitionsService/competitions.service";

@Component({
  selector: 'app-competitions',
  standalone: true,
  imports: [NgFor],
  templateUrl: './competitions.component.html',
  styleUrl: './competitions.component.scss'
})
export class CompetitionsComponent implements OnInit {

  competitionsList: any[] = [];

  constructor(private competitionsService: CompetitionsService){}

  ngOnInit(): void {
    this.competitionsService.getAllCompetitions().subscribe(
      (data: any[]) => {
        this.competitionsList = data;
      }
    );
  }
}
