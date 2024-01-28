import { ListComponent } from './../../../../shared/components/list/list.component';
import { LinkComponent } from './../../../../shared/components/link/link.component';
import { SectionContentComponent } from './../../../../shared/components/section-content/section-content.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { IMAGE_ASSETS_PATH } from '../../../../core/image.assets';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    SectionContentComponent,
    SectionHeadingComponent,
    LinkComponent,
    ListComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  assetsPath: any = IMAGE_ASSETS_PATH;
  skillsAndTechnologies: string[] = [
    "Angular",
    "Angular JS",
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "Node.js",
    "Typescript",
    "Wordpress",
    "Ruby on Rails",
    "Php",
    "Html5",
    "CSS3/SCSS/SASS/LESS",
    "Git",
    "Vite",
    "Vue.js",
    "Webpack",
    "Flutter"
  ]
}
