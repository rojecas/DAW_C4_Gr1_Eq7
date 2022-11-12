import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProspectosComponent } from './consultar-prospectos.component';

describe('ConsultarProspectosComponent', () => {
  let component: ConsultarProspectosComponent;
  let fixture: ComponentFixture<ConsultarProspectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarProspectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarProspectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
