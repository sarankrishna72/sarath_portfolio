import { CommonModule } from '@angular/common';
import { Component,  } from '@angular/core';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { ButtonComponent } from '../../shared/components/form-components/button/button.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { SectionContentComponent } from '../../shared/components/section-content/section-content.component';
import { LinkComponent } from '../../shared/components/link/link.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { OsxWindowComponent } from '../../shared/components/osx-window/osx-window.component';
import { CarouselModule, OwlOptions} from 'ngx-owl-carousel-o';
import { IMAGE_ASSETS_PATH } from '../../core/image.assets';
import { FeatureWorkComponent } from './components/feature-work/feature-work.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MainContainerComponent,
    ButtonComponent,
    SectionHeadingComponent,
    SectionContentComponent,
    LinkComponent,
    AboutComponent,
    ExperienceComponent,
    OsxWindowComponent,
    CarouselModule,
    FeatureWorkComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent   {
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
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  slidesData: any = [
    {
      id: 1,
      image: IMAGE_ASSETS_PATH.advanced_app_with_javascript_certificate,
      title: "Advanced App with JavaScript"
    },{
      id: 5,
      image: IMAGE_ASSETS_PATH.hackerrank_angular_certificate,
      title: "Hackerrank Angular"
    },{
      id: 2,
      image: IMAGE_ASSETS_PATH.flux_reactjs_certificate,
      title: "Flux React"
    },{
      id: 6,
      image: IMAGE_ASSETS_PATH.linkedin_web_development_certificate,
      title: "Web Development Linkedin"
    },{
      id: 3,
      image: IMAGE_ASSETS_PATH.github_management_certificate,
      title: "Github Management"
    },{
      id: 4,
      image: IMAGE_ASSETS_PATH.google_analytics_certificate,
      title: "Google Analytics"
    },{
      id: 7,
      image: IMAGE_ASSETS_PATH.sololearn_angular_certificate,
      title: "Sololearn Angular"
    },{
      id: 8,
      image: IMAGE_ASSETS_PATH.sql_relational_database_certificate,
      title: "SQL Relational Database"
    }
  ]

}
