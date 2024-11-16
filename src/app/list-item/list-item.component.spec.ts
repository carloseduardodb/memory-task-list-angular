import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListItemComponent } from './list-item.component';
import { Task } from '../../models/task.model'; // Importe o modelo de Task
import { By } from '@angular/platform-browser'; // Para selecionar elementos no DOM

// describe('ListItemComponent', () => {
//   let component: ListItemComponent;
//   let fixture: ComponentFixture<ListItemComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [ListItemComponent], // O componente já está importado
//     }).compileComponents();

//     fixture = TestBed.createComponent(ListItemComponent);
//     component = fixture.componentInstance;
//   });

//   it('deve criar o componente', () => {
//     expect(component).toBeTruthy();
//   });

//   it('deve exibir o texto da tarefa no modo list', () => {
//     // Simulando a tarefa
//     const task: Task = {
//       id: '1',
//       text: 'Testar o componente',
//       completed: false,
//     };
//     component.task = task;
//     component.mode = 'list'; // Definindo o modo como 'list'
//     fixture.detectChanges(); // Atualizando a visualização

//     const taskTextElement = fixture.debugElement.query(
//       By.css('span')
//     ).nativeElement;
//     expect(taskTextElement.textContent).toBe('Testar o componente');
//   });

//   it('deve exibir o input de texto no modo edit', () => {
//     // Simulando a tarefa
//     const task: Task = {
//       id: '1',
//       text: 'Testar o componente',
//       completed: false,
//     };
//     component.task = task;
//     component.mode = 'edit'; // Definindo o modo como 'edit'
//     fixture.detectChanges(); // Atualizando a visualização

//     const inputElement = fixture.debugElement.query(
//       By.css('input')
//     ).nativeElement;
//     expect(inputElement.value).toBe('Testar o componente');
//   });

//   it('deve emitir toggleComplete quando o botão de completar for clicado', () => {
//     const task: Task = {
//       id: '1',
//       text: 'Testar o componente',
//       completed: false,
//     };
//     component.task = task;
//     component.mode = 'list'; // Definindo o modo como 'list'
//     fixture.detectChanges();

//     spyOn(component.toggleComplete, 'emit'); // Espiando o evento emitido

//     const completeButton = fixture.debugElement.query(
//       By.css('.cursor-pointer')
//     ).nativeElement;
//     completeButton.click(); // Simulando o clique no botão

//     expect(component.toggleComplete.emit).toHaveBeenCalledWith({
//       ...task,
//       completed: true,
//     });
//   });

//   it('deve emitir onEdit quando o botão de editar for clicado', () => {
//     const task: Task = {
//       id: '1',
//       text: 'Testar o componente',
//       completed: false,
//     };
//     component.task = task;
//     component.mode = 'list';
//     fixture.detectChanges();

//     spyOn(component.onEdit, 'emit');

//     const editButton = fixture.debugElement.query(
//       By.css('button')
//     ).nativeElement;
//     editButton.click();

//     expect(component.onEdit.emit).toHaveBeenCalledWith(task);
//   });

//   it('deve emitir onDelete quando o botão de excluir for clicado', () => {
//     const task: Task = {
//       id: '1',
//       text: 'Testar o componente',
//       completed: false,
//     };
//     component.task = task;
//     component.mode = 'list';
//     fixture.detectChanges();

//     spyOn(component.onDelete, 'emit');

//     const deleteButton = fixture.debugElement.queryAll(By.css('button'))[2]
//       .nativeElement;
//     deleteButton.click(); // O terceiro botão é o de excluir

//     expect(component.onDelete.emit).toHaveBeenCalledWith('1');
//   });

//   it('deve alternar o modo de edição para list quando emitComplete for chamado', () => {
//     const task: Task = {
//       id: '1',
//       text: 'Testar o componente',
//       completed: false,
//     };
//     component.task = task;
//     component.mode = 'edit';
//     fixture.detectChanges();

//     component.emitComplete(); // Mudando o modo para 'list'

//     expect(component.mode).toBe('list');
//     expect(component.onEdit.emit).toHaveBeenCalledWith(task);
//   });
// });
