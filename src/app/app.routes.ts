import { Routes } from '@angular/router';
import { About } from './views/about/about';
import { Projects } from './views/projects/projects';
import { Resume } from './views/resume/resume';
import { Contact } from './views/contact/contact';

export const routes: Routes = [
    {
        path: '',
        component: About
    },
    {
        path: 'project',
        component: Projects
    },
    {
        path: 'resume',
        component: Resume
    },
    {
        path: 'contact',
        component: Contact
    }
];
