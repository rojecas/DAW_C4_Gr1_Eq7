import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarProspectosComponent } from './actualizar-prospectos.component';

describe('ActualizarProspectosComponent', () => {
  let component: ActualizarProspectosComponent;
  let fixture: ComponentFixture<ActualizarProspectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarProspectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarProspectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
