import { Component } from '@angular/core';
import { About } from '../components/about/about';
import { Projects } from '../components/projects/projects';
import { Contact } from '../components/contact/contact';
import { Resume } from '../components/resume/resume';
import { TranslocoPipe } from '@jsverse/transloco';
import { Skills } from '../components/skills/skills';
import { Languages } from '../components/languages/languages';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [
    About,
    Projects,
    Contact,
    Resume,
    Skills,
    Languages,
    TranslocoPipe,
    MatIconModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  scrollTo(id: string, position: ScrollLogicalPosition = 'center'): void {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: position
    });
  }
}
