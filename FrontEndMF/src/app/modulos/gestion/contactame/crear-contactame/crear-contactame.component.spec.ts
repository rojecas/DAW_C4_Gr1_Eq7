import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearContactameComponent } from './crear-contactame.component';

describe('CrearContactameComponent', () => {
  let component: CrearContactameComponent;
  let fixture: ComponentFixture<CrearContactameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearContactameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearContactameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
