import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let inputElement: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    inputElement = fixture.nativeElement.querySelector('input');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct placeholder', () => {
    component.placeholder = 'Digite aqui';
    fixture.detectChanges();
    expect(inputElement.getAttribute('placeholder')).toBe('Digite aqui');
  });

  it('should display the correct value and emit on input change', () => {
    // Testando quando o valor inicial é vazio
    component.value = 'Teste';
    fixture.detectChanges();
    expect(inputElement.value).toBe('Teste');

    // Testando quando o valor é alterado
    inputElement.value = 'Novo Valor';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.value).toBe('Novo Valor');
  });

  it('should apply correct size classes', () => {
    // Testando o tamanho 'small'
    component.size = 'small';
    fixture.detectChanges();
    expect(inputElement.classList).toContain('px-3');
    expect(inputElement.classList).toContain('py-2');
    expect(inputElement.classList).toContain('text-sm');

    // Testando o tamanho 'medium'
    component.size = 'medium';
    fixture.detectChanges();
    expect(inputElement.classList).toContain('px-4');
    expect(inputElement.classList).toContain('py-2');
    expect(inputElement.classList).toContain('text-base');

    // Testando o tamanho 'large'
    component.size = 'large';
    fixture.detectChanges();
    expect(inputElement.classList).toContain('px-4');
    expect(inputElement.classList).toContain('py-3');
    expect(inputElement.classList).toContain('text-lg');
  });

  // it('should apply correct classes when disabled', () => {
  //   component.disabled = true;
  //   fixture.detectChanges();
  //   expect(inputElement.classList).toContain('bg-gray-200');
  //   expect(inputElement.classList).toContain('text-gray-500');
  //   expect(inputElement.classList).toContain('cursor-not-allowed');
  //   expect(inputElement.disabled).toBeTrue(); // O input deve estar desabilitado

  //   component.disabled = false;
  //   fixture.detectChanges();
  //   expect(inputElement.classList).toContain('bg-white');
  //   expect(inputElement.classList).toContain('text-gray-900');
  //   expect(inputElement.classList).toContain('border-gray-300');
  // });

  it('should apply correct classes when focused', () => {
    // Testando quando o input NÃO está focado
    component.isInputFocused = false;
    fixture.detectChanges();
    expect(inputElement.classList).toContain('border-transparent');
    expect(inputElement.classList).toContain('border-2');

    // Testando quando o input ESTÁ focado
    component.isInputFocused = true;
    fixture.detectChanges();
    expect(inputElement.classList).toContain('border-white/50');
    expect(inputElement.classList).toContain('shadow-lg');
  });

  it('should emit valueChange event when input value changes', () => {
    spyOn(component.valueChange, 'emit');

    inputElement.value = 'Novo valor';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.valueChange.emit).toHaveBeenCalledWith('Novo valor');
  });

  // it('should call onFocus and onBlur correctly', () => {
  //   spyOn(component, 'onFocus');
  //   spyOn(component, 'onBlur');

  //   inputElement.dispatchEvent(new Event('focus'));
  //   fixture.detectChanges();
  //   expect(component.onFocus).toHaveBeenCalled();

  //   inputElement.dispatchEvent(new Event('blur'));
  //   fixture.detectChanges();
  //   expect(component.onBlur).toHaveBeenCalled();
  // });
});
