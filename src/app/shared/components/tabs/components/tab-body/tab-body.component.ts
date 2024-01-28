import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab-body',
  standalone: true,
  imports: [],
  templateUrl: './tab-body.component.html',
  styleUrl: './tab-body.component.scss'
})
export class TabBodyComponent {
  @ViewChild(TemplateRef) bodyContent: TemplateRef<any>;
}
