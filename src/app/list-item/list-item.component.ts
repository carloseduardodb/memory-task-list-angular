import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-item.component.html',
})
export class ListItemComponent {
  @Input() task!: Task;
  @Input() mode: 'list' | 'edit' = 'list';

  @Output() toggleComplete = new EventEmitter<Task>();
  @Output() onEdit = new EventEmitter<Task>();
  @Output() onDelete = new EventEmitter<string>();

  emitToggleComplete() {
    this.toggleComplete.emit({
      ...this.task,
      completed: !this.task.completed,
    });
  }

  emitEdit() {
    this.mode = 'edit';
  }

  emitDelete() {
    this.onDelete.emit(this.task.id);
  }

  emitComplete() {
    this.mode = 'list';
    this.onEdit.emit(this.task);
  }
}
