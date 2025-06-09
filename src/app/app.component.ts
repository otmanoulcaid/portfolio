import { Component } from '@angular/core';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-root',
  imports: [SideBarComponent, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
