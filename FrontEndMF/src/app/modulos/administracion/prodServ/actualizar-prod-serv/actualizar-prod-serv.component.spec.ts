import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarProdServComponent } from './actualizar-prod-serv.component';

describe('ActualizarProdServComponent', () => {
  let component: ActualizarProdServComponent;
  let fixture: ComponentFixture<ActualizarProdServComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarProdServComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarProdServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
