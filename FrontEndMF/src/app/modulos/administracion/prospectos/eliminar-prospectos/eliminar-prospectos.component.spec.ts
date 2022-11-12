import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProspectosComponent } from './eliminar-prospectos.component';

describe('EliminarProspectosComponent', () => {
  let component: EliminarProspectosComponent;
  let fixture: ComponentFixture<EliminarProspectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProspectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarProspectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
