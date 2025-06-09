import { Routes } from '@angular/router';
import { AboutComponent } from './body/about/about.component';
import { ResumeComponent } from './body/resume/resume.component';
import { PortfolioComponent } from './body/portfolio/portfolio.component';
import { BlogComponent } from './body/blog/blog.component';
import { ContactComponent } from './body/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },  // Redirect empty path to /about
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
];
