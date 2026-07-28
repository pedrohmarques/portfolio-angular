import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-skills',
  imports: [
    TranslocoPipe
  ],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {

  skills = [
    {
      name: "frontend",
      stacks: ["ReactJS", "Angular 10+", "Vue", "SCSS", "TypeScript", "Next.js"]
    },
    {
      name: "backend",
      stacks: ["Node.js", "Express", "NestJS", "REST", "FastAPI", "GraphQL", "PHP", "Laravel"]
    },
    {
      name: "database",
      stacks: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      name: "cloud",
      stacks: ["AWS", "Azure", "Docker", "Git", "CI/CD", "Linux"]
    }
  ]
}
