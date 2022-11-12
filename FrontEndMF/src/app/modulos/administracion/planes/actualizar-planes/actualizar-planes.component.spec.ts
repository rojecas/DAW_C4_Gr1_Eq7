import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPlanesComponent } from './actualizar-planes.component';

describe('ActualizarPlanesComponent', () => {
  let component: ActualizarPlanesComponent;
  let fixture: ComponentFixture<ActualizarPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarPlanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
