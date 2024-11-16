import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() isInputFocused = false;
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() disabled = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event): void {
    this.value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(this.value);
  }

  onFocus(): void {
    this.isInputFocused = true;
  }

  onBlur(): void {
    this.isInputFocused = false;
  }

  getSizeClasses(): string {
    switch (this.size) {
      case 'small':
        return 'px-3 py-2 text-sm';
      case 'large':
        return 'px-4 py-3 text-lg';
      default: // medium
        return 'px-4 py-2 text-base';
    }
  }
}
