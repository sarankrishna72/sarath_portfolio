import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Size, ThemeVariables } from '../../../core/enum';

@Component({
  selector: 'app-section-content',
  standalone: true,
  imports: [],
  templateUrl: './section-content.component.html',
  styleUrl: './section-content.component.scss'
})
export class SectionContentComponent  implements OnInit{
  @Input() classes: string = '';
  @Input() colorType: string = ThemeVariables.primary;
  @Input() size: string = Size.sm;

  ngOnInit() {
   this.classes += ' text-'+this.size+' ';
  }
}
