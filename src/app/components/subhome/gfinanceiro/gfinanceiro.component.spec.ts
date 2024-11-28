import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GfinanceiroComponent } from './gfinanceiro.component';

describe('GfinanceiroComponent', () => {
  let component: GfinanceiroComponent;
  let fixture: ComponentFixture<GfinanceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GfinanceiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GfinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
