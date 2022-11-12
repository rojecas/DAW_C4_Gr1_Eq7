import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMascotasComponent } from './eliminar-mascotas.component';

describe('EliminarMascotasComponent', () => {
  let component: EliminarMascotasComponent;
  let fixture: ComponentFixture<EliminarMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarMascotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
