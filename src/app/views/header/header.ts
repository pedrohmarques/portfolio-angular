import { Component, effect, signal } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-header',
  imports: [
    TranslocoPipe
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  language = signal<string>('pt-BR')

  constructor(private translocoService: TranslocoService) {
    effect(() => {
      this.translocoService.setActiveLang(this.language())
    })
  }

  changeLanguage(language: string) {
    this.language.set(language)
  }

  scrollTo(id: string, position: ScrollLogicalPosition = 'center'): void {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: position
    });
  }
}
