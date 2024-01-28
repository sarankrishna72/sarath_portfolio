import { Component, ElementRef, ViewChild, WritableSignal, signal, effect } from '@angular/core';
import { ButtonComponent } from '../form-components/button/button.component';
import { CommonModule } from '@angular/common';
import { IMAGE_ASSETS_PATH } from '../../../core/image.assets';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navItems:string[] = ["About", "Experience", "Projects", "Certifications", "Contact"];
  iconsPath: any = IMAGE_ASSETS_PATH;
  @ViewChild("sideNav") sideNav: ElementRef<any>;
  isSideNavOpen: WritableSignal<boolean> = signal(false);

  effectChange = effect(() => {
    if (this.isSideNavOpen()) {
      this.sideNav.nativeElement.style.width = "250px"
    } else {
      this.sideNav.nativeElement.style.width = "0px"
    }
  });

  openSideNav() {
    this.isSideNavOpen.update(prev => !prev);
  }
}
