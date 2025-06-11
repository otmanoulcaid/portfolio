import { Component } from '@angular/core';
import { ExpertiseCardComponent } from './expertise-card/expertise-card.component';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-about',
  imports: [ExpertiseCardComponent, TitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  standalone: true
})
export class AboutComponent {

}
