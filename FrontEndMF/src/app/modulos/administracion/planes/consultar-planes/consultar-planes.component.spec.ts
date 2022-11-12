import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPlanesComponent } from './consultar-planes.component';

describe('ConsultarPlanesComponent', () => {
  let component: ConsultarPlanesComponent;
  let fixture: ComponentFixture<ConsultarPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarPlanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
