import { Component, ContentChild, Input } from '@angular/core';
import { TabBodyComponent } from '../tab-body/tab-body.component';
import { TabLabelComponent } from '../tab-label/tab-label.component';

@Component({
  selector: 'app-tab-item',
  standalone: true,
  imports: [],
  templateUrl: './tab-item.component.html',
  styleUrl: './tab-item.component.scss'
})
export class TabItemComponent {
  @ContentChild(TabBodyComponent) bodyComponent!: TabBodyComponent;
  @ContentChild(TabLabelComponent) labelComponent!: TabLabelComponent;
  @Input() label: string = '';
  @Input() isActive: boolean = false;
}
