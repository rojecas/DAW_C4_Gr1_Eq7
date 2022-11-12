import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProdServComponent } from './consultar-prod-serv.component';

describe('ConsultarProdServComponent', () => {
  let component: ConsultarProdServComponent;
  let fixture: ComponentFixture<ConsultarProdServComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarProdServComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarProdServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
