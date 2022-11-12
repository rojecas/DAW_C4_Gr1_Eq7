import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAfiliacionesComponent } from './actualizar-afiliaciones.component';

describe('ActualizarAfiliacionesComponent', () => {
  let component: ActualizarAfiliacionesComponent;
  let fixture: ComponentFixture<ActualizarAfiliacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarAfiliacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarAfiliacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
