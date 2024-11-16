import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() label = 'Clique aqui';
  @Input() disabled = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  @Output() onClick = new EventEmitter<void>();

  getSizeClasses(): string {
    switch (this.size) {
      case 'small':
        return 'px-4 py-2 text-sm';
      case 'medium':
        return 'px-6 py-3 text-base';
      case 'large':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  }
}
