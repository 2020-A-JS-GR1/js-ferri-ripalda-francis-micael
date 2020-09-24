import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCartoonComponent } from './lista-cartoon.component';

describe('ListaCartoonComponent', () => {
  let component: ListaCartoonComponent;
  let fixture: ComponentFixture<ListaCartoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCartoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCartoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
