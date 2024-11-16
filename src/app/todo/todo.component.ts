import { Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { ListComponent } from '../list/list.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ButtonComponent, InputComponent, ListComponent],
  templateUrl: './todo.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class TodoComponent {
  @Input() inputValue: string = '';

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.inputValue) {
      this.taskService.addTask(this.inputValue);
      this.inputValue = '';
    }
  }
}
