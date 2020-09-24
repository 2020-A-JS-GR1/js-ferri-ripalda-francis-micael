import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCartoonComponent } from './crear-cartoon.component';

describe('CrearCartoonComponent', () => {
  let component: CrearCartoonComponent;
  let fixture: ComponentFixture<CrearCartoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCartoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCartoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
