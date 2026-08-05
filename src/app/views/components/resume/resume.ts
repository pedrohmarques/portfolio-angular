import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { WorkDetail, WorkDetailDialog } from './work-detail-dialog/work-detail-dialog';

@Component({
  selector: 'app-resume',
  imports: [
    TranslocoPipe,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {

  constructor(
    private translocoService: TranslocoService,
    private dialog: MatDialog
  ){

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

  works: WorkDetail[] = [
    {
      enterprise: "ENACOM",
      year: "2022 - 2026",
      vocation: "Engenheiro de Software",
      vocationEN: "Software Engineer",
      description: "Atuei no desenvolvimento de aplicações web utilizando Angular 13+, Node.js, MongoDB, AWS, Docker e Azure. Também fui responsável por liderar uma equipe de desenvolvedores, definir a arquitetura dos projetos e garantir a adoção de boas práticas de desenvolvimento.",
      descriptionEN: "Worked on the development of web applications using Angular 13+, Node.js, MongoDB, AWS, Docker, and Azure. Also led a team of developers, defined project architectures, and promoted software development best practices to deliver scalable and maintainable solutions.",
      responsibilities: [
        "Desenvolvimento de aplicações web escaláveis e de alta performance com Angular 18.",
        "Desenvolvimento de soluções para grandes clientes, como Gerdau, Cemig e VLI.",
        "Implementação de novas funcionalidades e integrações com APIs.",
        "Correção de problemas e otimização de desempenho das aplicações.",
        "Participação em revisões de código e proposição de melhorias na arquitetura Front-end.",
        "Colaboração com equipes multidisciplinares utilizando metodologias ágeis."
      ],
      responsibilitiesEN: [
        "Development of scalable, high-performance web applications with Angular 18.",
        "Development of solutions for major clients such as Gerdau, Cemig, and VLI.",
        "Implementation of new features and API integrations.",
        "Bug fixing and performance optimization of applications.",
        "Participation in code reviews and proposing improvements to the Front-end architecture.",
        "Collaboration with multidisciplinary teams using agile methodologies."
      ],
      achievements: [
        "Participação na criação e evolução do Design System da empresa (Induxtry).",
        "Desenvolvimento de componentes reutilizáveis, padronizando interfaces entre diferentes projetos.",
        "Contribuição para a consistência visual e técnica entre os produtos da empresa.",
        "Responsável pelo Projeto Gerdau - Cosigua, com o objetivo de agilizar o planejamento trimestral da área de metalurgia dos Laminadores 1, 2 e 3."
      ],
      achievementsEN: [
        "Contributed to the creation and evolution of the company's Design System (Induxtry).",
        "Developed reusable components, standardizing interfaces across different projects.",
        "Helped ensure visual and technical consistency across the company's products.",
        "Responsible for the Gerdau - Cosigua Project, aimed at streamlining quarterly planning for the metallurgy area of Rolling Mills 1, 2, and 3."
      ],
      technologies: ["Angular 18", "Design System", "REST APIs", "Node.js", "MongoDB", "AWS", "Azure", "SCSS"]
    },
    {
      enterprise: "SOFTTEK",
      year: "2021 - 2022",
      vocation: "Desenvolvedor Full Stack Pleno",
      vocationEN: "Full Stack Developer PL",
      description: "Responsável pela manutenção dos ATMs dos bancos Safra e Itaú, além do desenvolvimento e manutenção de aplicações web utilizando Angular e Node.js.",
      descriptionEN: "Responsible for maintaining ATM systems for Safra and Itaú banks, as well as developing and maintaining web applications using Angular and Node.js.",
      responsibilities: [
        "Manutenção dos ATMs dos bancos Safra e Itaú utilizando Angular e Node.js.",
        "Integrações entre os sistemas do Banco Safra e do Banco Itaú."
      ],
      responsibilitiesEN: [
        "ATM systems maintenance for Safra and Itaú banks using Angular and Node.js.",
        "Integrations between Banco Safra and Banco Itaú systems."
      ],
      achievements: [],
      achievementsEN: [],
      technologies: ["Angular", "Node.js"]
    },
    {
      enterprise: "TEKNISA",
      year: "2017 - 2021",
      vocation: "Desenvolvedor Full Stack",
      vocationEN: "Full Stack Developer JR",
      description: "Desenvolvimento de aplicações web com AngularJS, Vue.js, PHP e PostgreSQL, atuando em equipes ágeis com foco na implementação, manutenção e evolução de sistemas.",
      descriptionEN: "Development and maintenance of web applications using AngularJS, Vue.js, PHP, and PostgreSQL, working in Agile teams to deliver and continuously improve software solutions.",
      responsibilities: [
        "Manutenção de uma aplicação de gerenciamento de postos de combustíveis com AngularJS e PHP 7.",
        "Desenvolvimento do Painel de Produção (Angular) para gestão da produção em cozinhas de restaurantes.",
        "Desenvolvimento do sistema de Planejamento de Cardápio (Vue.js).",
        "Manutenção de aplicativo de reserva de pratos em Angular e de aplicação de cardápio inteligente em Vue.js.",
        "Atuação em equipes ágeis utilizando a metodologia Scrum."
      ],
      responsibilitiesEN: [
        "Maintenance of a fuel station management application using AngularJS and PHP 7.",
        "Development of the Production Panel (Angular) for restaurant kitchen production management.",
        "Development of the Menu Planning system (Vue.js).",
        "Maintenance of an Angular dish-reservation app and a Vue.js smart menu web application.",
        "Working in Agile teams using the Scrum methodology."
      ],
      achievements: [
        "Desenvolvimento do Painel de Produção (Angular), com alertas visuais para pedidos que ultrapassavam o tempo previsto.",
        "Desenvolvimento do sistema de Planejamento de Cardápio (Vue.js) para organização semanal de pratos."
      ],
      achievementsEN: [
        "Built the Production Panel (Angular), with visual alerts for orders that exceeded the expected time.",
        "Built the Menu Planning system (Vue.js) for weekly dish scheduling."
      ],
      technologies: ["AngularJS", "Angular", "Vue.js", "PHP 7"]
    },
    {
      enterprise: "CDC CARD",
      year: "2017 - 2017",
      vocation: "Desenvolvedor Front-end Junior",
      vocationEN: "Frontend Developer JR",
      description: "Desenvolvimento de aplicações web escaláveis usando .NET.",
      descriptionEN: "Developing scalable web application with .NET",
      responsibilities: [
        "Desenvolvimento e manutenção do website da empresa.",
        "Implementação e manutenção de funcionalidades utilizando .NET Core."
      ],
      responsibilitiesEN: [
        "Development and maintenance of the company website.",
        "Implementation and maintenance of features using .NET Core."
      ],
      achievements: [
        "Consolidação dos primeiros conhecimentos profissionais em desenvolvimento Front-end e em .NET Core."
      ],
      achievementsEN: [
        "Built foundational professional experience in Front-end development and .NET Core."
      ],
      technologies: [".NET Core"]
    }
  ]

  openWorkDetail(work: WorkDetail): void {
    this.dialog.open(WorkDetailDialog, {
      data: work,
      panelClass: 'work-detail-dialog-panel',
      width: 'min(52rem, 92vw)',
      maxHeight: '85vh',
      autoFocus: false
    });
  }
}
