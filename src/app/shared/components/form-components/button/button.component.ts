import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { Size, ThemeVariables } from '../../../../core/enum';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit {
  @Input() buttonType: string = ThemeVariables.primary;
  @Input() buttonText: string = '';
  @Input() buttonSize: string = Size.sm;
  @Input() buttonClass: string = '';
  @Input() isRounded: boolean = false;
  @Input() isOutlined: boolean = false;
  @Input() isWidthFull: boolean = false;
  @Output() onPress: EventEmitter<any> = new EventEmitter();

  /**
   * return the button size class name
   *
   * @return {*}  {string}
   * @memberof ButtonComponent
   */
  getButtonSizeClass(): string {
    switch (this.buttonSize) {
      case Size.sm:
        return "button-sm";
      case Size.md:
        return "button-md";
      case Size.lg:
        return "button-lg";
      case Size.xl:
        return "button-xl";
      default:
        return "button-md";
    }
  }

  /**
   * return the button type class name
   *
   * @return {*}  {string}
   * @memberof ButtonComponent
   */
  getButtonTypeClass(): string {
    switch (this.buttonType) {
      case ThemeVariables.primary:
        return  `${this.isOutlined ? 'primary-outlined outlined button-primary-outlined-hover primary-outlined-ripple' : ' button-primary-hover default-ripple'} button-primary`;
      case ThemeVariables.secondary:
        return  `${this.isOutlined ? 'secondary-outlined outlined button-secondary-outlined-hover secondary-outlined-ripple' : ' button-secondary-hover default-ripple'} button-secondary`;
      default:
        return ''
    }
  }

  onButtonClick() {
    this.onPress.emit(true)
  }

  /**
   * Returns the button classes
   *
   *
   * @memberof ButtonComponent
   */
  getButtonClasses() {
    this.buttonClass += ` ${this.getButtonTypeClass()}`;
    this.buttonClass += ` ${this.getButtonSizeClass()}`;
    if (this.isRounded) {
      this.buttonClass += " rounded";
    }

    if (this.isWidthFull) {
      this.buttonClass += ' w-full';
    }
  }

  /**
   * ngOnInit Life Cycle hook method
   *
   * @memberof ButtonComponent
   */
  ngOnInit():void {
    this.getButtonClasses();
  }

}

