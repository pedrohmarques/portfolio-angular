import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

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

  constructor(private translocoService: TranslocoService){

  }

  get systemLanguage(): string {
    return this.translocoService.getActiveLang()
  }

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

  works = [
    {
      enterprise: "ENACOM",
      year: "2022 - 2026",
      vocation: "Engenheiro de Software",
      vocationEN: "Software Engineer",
      description: "Atuei no desenvolvimento de aplicações web utilizando Angular 13+, Node.js, MongoDB, AWS, Docker e Azure. Também fui responsável por liderar uma equipe de desenvolvedores, definir a arquitetura dos projetos e garantir a adoção de boas práticas de desenvolvimento.",
      descriptionEN: "Worked on the development of web applications using Angular 13+, Node.js, MongoDB, AWS, Docker, and Azure. Also led a team of developers, defined project architectures, and promoted software development best practices to deliver scalable and maintainable solutions."
    },
    {
      enterprise: "SOFTTEK",
      year: "2021 - 2022",
      vocation: "Desenvolvedor Full Stack Pleno",
      vocationEN: "Full Stack Developer PL",
      description: "Responsável pela manutenção dos ATMs dos bancos Safra e Itaú, além do desenvolvimento e manutenção de aplicações web utilizando Angular e Node.js.",
      descriptionEN: "Responsible for maintaining ATM systems for Safra and Itaú banks, as well as developing and maintaining web applications using Angular and Node.js."
    },
    {
      enterprise: "TEKNISA",
      year: "2017 - 2021",
      vocation: "Desenvolvedor Full Stack",
      vocationEN: "Full Stack Developer JR",
      description: "Desenvolvimento de aplicações web com AngularJS, Vue.js, PHP e PostgreSQL, atuando em equipes ágeis com foco na implementação, manutenção e evolução de sistemas.",
      descriptionEN: "Development and maintenance of web applications using AngularJS, Vue.js, PHP, and PostgreSQL, working in Agile teams to deliver and continuously improve software solutions."
    },
    {
      enterprise: "CDC CARD",
      year: "2017 - 2017",
      vocation: "Desenvolvedor Front-end Junior",
      vocationEN: "Frontend Developer JR",
      description: "Desenvolvimento de aplicações web escaláveis usando .NET.",
      descriptionEN: "Developing scalable web application with .NET"
    }
  ]
}
