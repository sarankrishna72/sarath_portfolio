import { Component } from '@angular/core';
import { TabItemComponent } from '../../../../shared/components/tabs/components/tab-item/tab-item.component';
import { TabLabelComponent } from '../../../../shared/components/tabs/components/tab-label/tab-label.component';
import { TabsComponent } from '../../../../shared/components/tabs/tabs.component';
import { TabBodyComponent } from '../../../../shared/components/tabs/components/tab-body/tab-body.component';
import { SectionContentComponent } from '../../../../shared/components/section-content/section-content.component';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { LinkComponent } from '../../../../shared/components/link/link.component';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../../../../shared/components/list/list.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    TabItemComponent,
    TabLabelComponent,
    TabsComponent,
    TabBodyComponent,
    SectionContentComponent,
    SectionHeadingComponent,
    LinkComponent,
    ListComponent
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences : any[] = [
    {
      id: 1,
      company_name: 'Synechron Technologies Pvt Ltd',
      location: "Mississauga, Canada",
      position: 'Sr.Associate Technologies',
      company_profile_url: "https://synechron.com",
      start_date: new Date("2023/11/07"),
      end_date: '',
      job_responsibilities: [
        "Deliver high-quality, robust production code for a diverse array of projects for client Citi Bank",
        "Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness",
        "Architected and implemented the user interface of Citi applications for in browser user authorization"
      ]
    },
    {
      id: 2,
      company_name: 'Fortelogic Pvt Ltd',
      location: "Bangalore, India",
      position: 'Lead Engineer',
      company_profile_url: "https://fortelogic.in",
      start_date: new Date("2016/10/01"),
      end_date: new Date("2023/11/06"),
      job_responsibilities: [
        "Deliver high-quality, responsive, robust production code for a diverse array of projects for clients including Zee Entertainment, Disney, Akbar Travels, Riskcovry etc",
        "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
        "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
        "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship"
      ]
    },
  ]
}
