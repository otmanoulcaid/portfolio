import { Component } from '@angular/core';
import { ExpertiseCardComponent } from './expertise-card/expertise-card.component';

@Component({
  selector: 'app-about',
  imports: [ExpertiseCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  standalone: true
})
export class AboutComponent {

}
