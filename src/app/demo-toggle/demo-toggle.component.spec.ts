import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoToggleComponent } from './demo-toggle.component';

describe('DemoToggleComponent', () => {
  let component: DemoToggleComponent;
  let fixture: ComponentFixture<DemoToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
