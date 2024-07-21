import { Routes } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NoteComponent } from './components/note/note.component';
import { AboutComponent } from './components/about/about.component';
import { AboutProjectComponent } from './components/about-project/about-project.component';
import { AboutSponsorComponent } from './components/about-sponsor/about-sponsor.component';

export const routes: Routes = [
    {
        path:'notes', title:"Notes", component: NotesComponent
    },
    {
        path:'', redirectTo:"notes", pathMatch: "full"
    },
    {
        path:'note/:id', title:"Note", component: NoteComponent
    },
    {
        path:'about',
        title:"About", 
        component: AboutComponent,
        children: [
            {
                path: 'projects',
                title: "About Project",
                component: AboutProjectComponent
            },
            {
                path: 'sponsors',
                title: 'About Sponsor',
                component: AboutSponsorComponent
            }
        ]
    },
    {
        path:'**', title:"Not Found", component: PageNotFoundComponent
    },  
];
