import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-resume',
  imports: [
    TranslocoPipe,
    MatIconModule
  ],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {

  educations = [
    {
      year: "2026",
      education: "Bacharelado em Engenharia de Software",
      educationEN: "Software Engineer Bachelor Degree",
      location: "Universidade PUC Minas",
      locationEN: "PUC Minas University"
    },
    {
      year: "2016",
      education: "Curso de Informática",
      educationEN: "IT Course",
      location: "UTRAMIG",
      locationEN: "UTRAMIG"
    },
    {
      year: "2016",
      education: "Ensino Médio Completo",
      educationEN: "High School Education",
      location: "",
      locationEN: ""
    }
  ]
}
