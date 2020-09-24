import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCartoonComponent } from './formulario-cartoon.component';

describe('FormularioCartoonComponent', () => {
  let component: FormularioCartoonComponent;
  let fixture: ComponentFixture<FormularioCartoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCartoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCartoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
