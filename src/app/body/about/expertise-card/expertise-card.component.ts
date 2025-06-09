import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expertise-card',
  imports: [],
  templateUrl: './expertise-card.component.html',
  styleUrl: './expertise-card.component.css'
})
export class ExpertiseCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
