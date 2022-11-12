import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProdServComponent } from './eliminar-prod-serv.component';

describe('EliminarProdServComponent', () => {
  let component: EliminarProdServComponent;
  let fixture: ComponentFixture<EliminarProdServComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProdServComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarProdServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
