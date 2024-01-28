import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab-label',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './tab-label.component.html',
  styleUrl: './tab-label.component.scss',
})
export class TabLabelComponent {
  @ViewChild(TemplateRef) labelContent: TemplateRef<any>;
}
