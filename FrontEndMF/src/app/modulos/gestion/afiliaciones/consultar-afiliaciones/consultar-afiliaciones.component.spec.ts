import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAfiliacionesComponent } from './consultar-afiliaciones.component';

describe('ConsultarAfiliacionesComponent', () => {
  let component: ConsultarAfiliacionesComponent;
  let fixture: ComponentFixture<ConsultarAfiliacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarAfiliacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarAfiliacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
