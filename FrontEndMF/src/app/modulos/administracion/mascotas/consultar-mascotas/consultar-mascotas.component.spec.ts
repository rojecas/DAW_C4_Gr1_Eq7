import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMascotasComponent } from './consultar-mascotas.component';

describe('ConsultarMascotasComponent', () => {
  let component: ConsultarMascotasComponent;
  let fixture: ComponentFixture<ConsultarMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarMascotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
