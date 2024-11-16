import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { TaskService } from '../../services/task.service';
import { ListItemComponent } from '../list-item/list-item.component';
import { CommonModule } from '@angular/common';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let taskService: TaskService;

  const mockTasks = [
    { id: '1', text: 'Task 1' },
    { id: '2', text: 'Task 2' },
    { id: '3', text: 'Task 3' },
    { id: '4', text: 'Task 4' },
    { id: '5', text: 'Task 5' },
    { id: '6', text: 'Task 6' },
    { id: '7', text: 'Task 7' },
  ];

  beforeEach(async () => {
    // Criando um mock do TaskService
    const taskServiceMock = {
      allTasks: jasmine.createSpy('allTasks').and.returnValue(mockTasks),
      toggleTask: jasmine.createSpy('toggleTask'),
      deleteTask: jasmine.createSpy('deleteTask'),
      editTask: jasmine.createSpy('editTask'),
    };

    await TestBed.configureTestingModule({
      imports: [ListComponent, CommonModule, ListItemComponent],
      providers: [{ provide: TaskService, useValue: taskServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    taskService = TestBed.inject(TaskService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show the correct number of tasks per page', () => {
    component.currentPage = 1;
    fixture.detectChanges();
    expect(component.paginatedTasks.length).toBe(5); // 5 tasks per page

    component.currentPage = 2;
    fixture.detectChanges();
    expect(component.paginatedTasks.length).toBe(2); // 2 tasks on page 2
  });

  it('should calculate total pages correctly', () => {
    expect(component.totalPages).toBe(2); // Total pages should be 2 with 7 tasks
  });

  it('should change to the next page', () => {
    component.currentPage = 1;
    component.changePage(2); // Change to page 2
    fixture.detectChanges();
    expect(component.currentPage).toBe(2);
  });

  it('should change to the previous page', () => {
    component.currentPage = 2;
    component.changePage(1); // Change to page 1
    fixture.detectChanges();
    expect(component.currentPage).toBe(1);
  });

  it('should not change page when out of bounds', () => {
    component.currentPage = 1;
    component.changePage(0); // Trying to go to an invalid page
    fixture.detectChanges();
    expect(component.currentPage).toBe(1);

    component.changePage(3); // Trying to go to a page beyond the limit
    fixture.detectChanges();
    expect(component.currentPage).toBe(1); // The page should remain the same
  });

  // it('should disable "Anterior" button on the first page', () => {
  //   component.currentPage = 1;
  //   fixture.detectChanges();
  //   const anteriorButton = fixture.nativeElement.querySelector(
  //     'button:first-of-type'
  //   );
  //   expect(anteriorButton.disabled).toBeTrue(); // First page: "Anterior" button should be disabled
  // });

  // it('should disable "Próxima" button on the last page', () => {
  //   component.currentPage = 2; // Last page
  //   fixture.detectChanges();
  //   const proximaButton = fixture.nativeElement.querySelector(
  //     'button:last-of-type'
  //   );
  //   expect(proximaButton.disabled).toBeTrue(); // Last page: "Próxima" button should be disabled
  // });

  // it('should call toggleTask when task is toggled', () => {
  //   const task = mockTasks[0];
  //   component.toggleTask(task);
  //   expect(taskService.toggleTask).toHaveBeenCalledWith(task.id); // Ensures the toggle function was called with the task ID
  // });

  it('should call deleteTask when task is deleted', () => {
    const task = mockTasks[0];
    component.deleteTask(task.id);
    expect(taskService.deleteTask).toHaveBeenCalledWith(task.id); // Ensures the delete function was called with the task ID
  });

  // it('should call editTask when task is edited', () => {
  //   const task = mockTasks[0];
  //   task.text = 'Updated Task';
  //   component.editTask(task);
  //   expect(taskService.editTask).toHaveBeenCalledWith(task.id, task.text); // Ensures the edit function was called with the updated task data
  // });
});
