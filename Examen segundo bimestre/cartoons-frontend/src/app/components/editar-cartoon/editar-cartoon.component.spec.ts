import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCartoonComponent } from './editar-cartoon.component';

describe('EditarCartoonComponent', () => {
  let component: EditarCartoonComponent;
  let fixture: ComponentFixture<EditarCartoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCartoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCartoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
