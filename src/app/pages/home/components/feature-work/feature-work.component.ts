import { Component } from '@angular/core';
import { IMAGE_ASSETS_PATH } from '../../../../core/image.assets';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { SectionContentComponent } from '../../../../shared/components/section-content/section-content.component';
import { CarouselModule, OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-feature-work',
  standalone: true,
  imports: [
    CommonModule,
    SectionHeadingComponent,
    SectionContentComponent,
    CarouselModule
  ],
  templateUrl: './feature-work.component.html',
  styleUrl: './feature-work.component.scss'
})
export class FeatureWorkComponent {
  imagePath: any = IMAGE_ASSETS_PATH;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    center: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
  featureWorks: any = [
    {
      "id": 1,
      "name": "Employee Self Service",
      "description": "A progressive web app for visualizing the employees personal information. Employees can check there leave information, payments related information, and other hr related informations .",
      "image_urls": [IMAGE_ASSETS_PATH.employee_self_serv,IMAGE_ASSETS_PATH.employee_self_serv_2, IMAGE_ASSETS_PATH.employee_self_serv_3, IMAGE_ASSETS_PATH.employee_self_serv_4],
      "technologies": ["React.js", "HTML5", "SCSS", "Javascript", "VS Code"],
      "github_url": "https://github.com/sarankrishna72/react-employee-selfserv-portal"
    },{
      "id": 2,
      "name": "Flutter Netfilx Clone",
      "description": "The Netflix Clone mobile app recreates the familiar Netflix experience for users on their smartphones. With an easy-to-use interface.",
      "image_urls": [IMAGE_ASSETS_PATH.flutter_netflix_clone],
      "technologies": ["Flutter", "Bloc", "Android Emulator", "VS Code"],
      "github_url": "https://github.com/sarankrishna72/flutter_netflix_app"
    },{
      "id": 3,
      "name": "SocialBook (Facebook Clone)",
      "description": "Its a fully functional social media progressive web app inspired from Facebook. User can create account in this website, and also includes various features like Video Chat, Messaging, Photos and Videos Post, Like , comment, etc.",
      "image_urls": [IMAGE_ASSETS_PATH.socialbook, IMAGE_ASSETS_PATH.socialbook_2],
      "technologies": ["React.js", "Redux", "Node.js", "ExpressJS", "Mongo DB", "VS Code"],
      "github_url": "https://github.com/sarankrishna72/react-social-media"
    }
  ]

}
