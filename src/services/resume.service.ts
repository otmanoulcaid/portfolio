import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResumeService {
  constructor(private http: HttpClient) {}

  getSkills(): Observable<any[]> {
    return this.http.get<any[]>('assets/skills.json');
  }

  getStudies(): Observable<any[]> {
    return this.http.get<any[]>('assets/studies.json');
  }

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>('assets/projects.json');
  }
}

