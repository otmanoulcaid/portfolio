import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { ResumeService } from '../../../services/resume.service';

@Component({
  selector: 'app-resume',
  imports: [TitleComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
  standalone: true
})
export class ResumeComponent implements OnInit {
  skills: any[] = [];
  studies: any[] = [];

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.resumeService.getSkills().subscribe(data => {
      this.skills = data;
      console.log(this.skills);
    });
    this.resumeService.getStudies().subscribe(data => {
      this.studies = data;
      console.log(this.studies);
    });
  }
}

