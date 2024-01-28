import { Component } from '@angular/core';
import { SocialMediaSectionComponent } from '../../../../shared/components/social-media-section/social-media-section.component';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [
    SocialMediaSectionComponent
  ],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent {

}
