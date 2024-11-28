import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GclientesComponent } from './gclientes.component';

describe('GclientesComponent', () => {
  let component: GclientesComponent;
  let fixture: ComponentFixture<GclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GclientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
