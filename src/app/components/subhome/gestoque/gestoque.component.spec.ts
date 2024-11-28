import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestoqueComponent } from './gestoque.component';

describe('GestoqueComponent', () => {
  let component: GestoqueComponent;
  let fixture: ComponentFixture<GestoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestoqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
