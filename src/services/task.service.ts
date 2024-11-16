import { Injectable, signal, computed, effect } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly STORAGE_KEY = 'tasks';
  private tasks = signal<Task[]>(this.loadFromStorage());
  public readonly allTasks = computed(() => this.tasks());
  public readonly completedTasks = computed(() =>
    this.tasks().filter((task) => task.completed)
  );
  public readonly pendingTasks = computed(() =>
    this.tasks().filter((task) => !task.completed)
  );
  public readonly taskCount = computed(() => this.tasks().length);

  constructor() {
    effect(() => {
      this.saveToStorage(this.tasks());
    });
  }

  addTask(text: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
      createdAt: new Date(),
    };

    this.tasks.update((tasks) => [newTask, ...tasks]);
  }

  editTask(id: string, newText: string) {
    this.tasks.update((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText.trim() } : task
      )
    );
  }

  toggleTask(id: string) {
    this.tasks.update((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  deleteTask(id: string) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
  }

  clearTasks() {
    this.tasks.set([]);
  }

  private loadFromStorage(): Task[] {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved).map((task: any) => ({
          ...task,
          createdAt: new Date(task.createdAt),
        }));
      }
    } catch (error) {
      console.error('Erro ao carregar tasks:', error);
    }
    return [];
  }

  private saveToStorage(tasks: Task[]) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error('Erro ao salvar tasks:', error);
    }
  }
}
