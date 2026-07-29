import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-contact',
  imports: [
    TranslocoPipe,
    MatIconModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  constructor(private translocoService: TranslocoService) {
    
  }

  contacts = [
    {
      icon: "email",
      title: "EMAIL",
      description: "pdhmarques@gmail.com"
    },
    {
      icon: "instagram",
      title: "INSTAGRAM",
      description: "@_phmarks"
    },
    {
      icon: "wpp",
      title: "WHATSAPP",
      description: "+55 (31) 99132-7359"
    },
    {
      icon: "github",
      title: "GITHUB",
      description: "github.com/pedrohmarques"
    }
  ]

  redirect(contact: any): void {
    const messages = {
      email: this.translocoService.translate('contact.emailMessage'),
      wpp: this.translocoService.translate('contact.wppMessage')
    };
  
    const actions: Record<string, () => void> = {
      email: () => {
        window.location.href = `mailto:${contact.description}?subject=${encodeURIComponent(
          this.translocoService.translate('contact.emailSubject')
        )}&body=${encodeURIComponent(messages.email)}`;
      },
  
      wpp: () => {
        const phone = contact.description.replace(/\D/g, '');
  
        window.open(
          `https://wa.me/${phone}?text=${encodeURIComponent(messages.wpp)}`,
          '_blank'
        );
      },
  
      instagram: () => {
        window.open('https://instagram.com/_phmarks', '_blank');
      },
  
      github: () => {
        window.open('https://github.com/pedrohmarques', '_blank');
      }
    };
  
    actions[contact.icon]?.();
  }
}
