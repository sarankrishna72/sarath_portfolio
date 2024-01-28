import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule],
  template: '<a [href]="href" rel="noopener noreferrer" target="_blank" class="underline-animation text-theme-text-primary after:bg-theme-text-primary"><ng-content></ng-content></a>',
})
export class LinkComponent {
  @Input() href: string = '#'
}
