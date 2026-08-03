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
      name: "IA Chat",
      descriptionPT: "Projeto de um chat inteligente utilizando Next.js e a API da Groq, permitindo a comunicação em tempo real com modelos de Inteligência Artificial.",
      descriptionEN: "Intelligent chat project built with Next.js and the Groq API, enabling real-time communication with Artificial Intelligence models.",
      stacks: ["Next.js","Groq", "React", "Tailwind", "TypeScript"],
      github: "https://github.com/pedrohmarques/IA-Chat",
      site: "https://ia-chat-ivory.vercel.app"
    },
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
