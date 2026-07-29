import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-projects',
  imports: [
    TranslocoPipe
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  projects = [
    {
      name: "File Process RabbitMQ",
      description: "Sistema de processamento assíncrono de arquivos CSV e Excel utilizando arquitetura baseada em filas.",
      stacks: ["Angular 20","RxJS", "Node.js", "Socket.IO", "Docker", "RabbitMQ"],
      github: "https://github.com/pedrohmarques/file-process-rabbitmq",
      site: ""
    },
    {
      name: "File Process RabbitMQ",
      description: "Aplicação web moderna com foco em UX e performance",
      stacks: ["Angular 20","RxJS", "Node.js", "Socket.IO", "Docker", "RabbitMQ"],
      github: "https://github.com/pedrohmarques/file-process-rabbitmq",
      site: "https://github.com/pedrohmarques/file-process-rabbitmq"
    }
  ]

  openLink(link: string) {
    window.open(link, '_blank')
  }
}
