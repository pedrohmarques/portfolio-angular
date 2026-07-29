import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-projects',
  imports: [
    TranslocoPipe,
    MatIconModule
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  constructor(private translocoService: TranslocoService){

  }

  get systemLanguage(): string {
    return this.translocoService.getActiveLang()
  }
  
  projects = [
    {
      name: "File Process RabbitMQ",
      descriptionPT: "Sistema de processamento assíncrono de arquivos CSV e Excel utilizando arquitetura baseada em filas.",
      descriptionEN: "Asynchronous CSV and Excel File Processing System Built on a Queue-Based Architecture",
      stacks: ["Angular 20","RxJS", "Node.js", "Socket.IO", "Docker", "RabbitMQ"],
      github: "https://github.com/pedrohmarques/file-process-rabbitmq",
      site: ""
    }
  ]

  openLink(link: string) {
    window.open(link, '_blank')
  }
}
