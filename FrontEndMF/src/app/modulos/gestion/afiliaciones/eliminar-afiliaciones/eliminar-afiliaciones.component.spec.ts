import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAfiliacionesComponent } from './eliminar-afiliaciones.component';

describe('EliminarAfiliacionesComponent', () => {
  let component: EliminarAfiliacionesComponent;
  let fixture: ComponentFixture<EliminarAfiliacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarAfiliacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarAfiliacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
