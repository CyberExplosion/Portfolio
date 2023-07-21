import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowFieldComponent } from './flow-field.component';

describe('FlowFieldComponent', () => {
  let component: FlowFieldComponent;
  let fixture: ComponentFixture<FlowFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlowFieldComponent]
    });
    fixture = TestBed.createComponent(FlowFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
