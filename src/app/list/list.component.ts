import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ListItemComponent } from '../list-item/list-item.component';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  templateUrl: './list.component.html',
})
export class ListComponent {
  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor(private taskService: TaskService) {}

  get paginatedTasks() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.taskService.allTasks().slice(startIndex, endIndex);
  }

  get totalPages() {
    return Math.ceil(this.taskService.allTasks().length / this.itemsPerPage);
  }

  changePage(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  toggleTask(task: Task) {
    this.taskService.toggleTask(task.id);
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id);
  }

  editTask(event: Task) {
    this.taskService.editTask(event.id, event.text);
  }
}
