import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  aboutInfo: string = "abc";
  techStack: string[] = ["Angular", "HTML", "CSS", "TypeScript"];
  constructor() { }

  getAboutInfo(): string {
    return this.aboutInfo;
  }

  getTechStack(): string[] {
    return this.techStack;
  }

}
