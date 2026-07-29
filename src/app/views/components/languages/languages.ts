import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-languages',
  imports: [
    TranslocoPipe
  ],
  templateUrl: './languages.html',
  styleUrl: './languages.scss',
})
export class Languages {

  languages = [
    {
      language: 'BR',
      translocoObject: 'pt'
    },
    {
      language: 'US',
      translocoObject: 'en'
    }
  ]
}
