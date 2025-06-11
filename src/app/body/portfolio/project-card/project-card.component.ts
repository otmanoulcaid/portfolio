import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project!: {
    title: string;
    organization: string;
    period: string;
    projectTitle: string;
    technologies: string[];
    description: string;
  };
}


