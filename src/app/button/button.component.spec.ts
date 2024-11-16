import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let buttonElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    buttonElement = fixture.nativeElement.querySelector('button');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should display the correct label', () => {
  //   // Testando o valor padrão de "label"
  //   expect(buttonElement.textContent).toBe('Clique aqui');

  //   // Testando quando o valor de "label" for alterado
  //   component.label = 'Novo texto';
  //   fixture.detectChanges();
  //   expect(buttonElement.textContent).toBe('Novo texto');
  // });

  it('should apply correct size classes', () => {
    // Testando o tamanho 'small'
    component.size = 'small';
    fixture.detectChanges();
    expect(buttonElement.classList).toContain('px-4');
    expect(buttonElement.classList).toContain('py-2');
    expect(buttonElement.classList).toContain('text-sm');

    // Testando o tamanho 'medium'
    component.size = 'medium';
    fixture.detectChanges();
    expect(buttonElement.classList).toContain('px-6');
    expect(buttonElement.classList).toContain('py-3');
    expect(buttonElement.classList).toContain('text-base');

    // Testando o tamanho 'large'
    component.size = 'large';
    fixture.detectChanges();
    expect(buttonElement.classList).toContain('px-8');
    expect(buttonElement.classList).toContain('py-4');
    expect(buttonElement.classList).toContain('text-lg');
  });

  it('should apply correct classes when disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    expect(buttonElement.classList).toContain('bg-gray-400');
    expect(buttonElement.classList).toContain('text-gray-200');
    expect(buttonElement.classList).toContain('cursor-not-allowed');
    // expect(buttonElement.disabled).toBeTrue();

    component.disabled = false;
    fixture.detectChanges();
    expect(buttonElement.classList).toContain('bg-green-500');
    expect(buttonElement.classList).toContain('text-white');
    expect(buttonElement.classList).toContain('hover:bg-green-600');
  });

  // it('should emit onClick event when clicked and not disabled', () => {
  //   spyOn(component.onClick, 'emit');

  //   // Testando quando o botão NÃO está desabilitado
  //   component.disabled = false;
  //   fixture.detectChanges();
  //   buttonElement.click();
  //   expect(component.onClick.emit).toHaveBeenCalled();

  //   // Testando quando o botão ESTÁ desabilitado
  //   component.disabled = true;
  //   fixture.detectChanges();
  //   buttonElement.click();
  //   expect(component.onClick.emit).not.toHaveBeenCalled();
  // });
});
