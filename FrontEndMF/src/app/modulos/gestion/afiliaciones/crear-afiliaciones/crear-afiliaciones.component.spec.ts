import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAfiliacionesComponent } from './crear-afiliaciones.component';

describe('CrearAfiliacionesComponent', () => {
  let component: CrearAfiliacionesComponent;
  let fixture: ComponentFixture<CrearAfiliacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAfiliacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearAfiliacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
