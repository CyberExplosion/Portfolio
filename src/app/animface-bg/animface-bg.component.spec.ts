import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimfaceBgComponent } from './animface-bg.component';

describe('AnimfaceBgComponent', () => {
  let component: AnimfaceBgComponent;
  let fixture: ComponentFixture<AnimfaceBgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimfaceBgComponent]
    });
    fixture = TestBed.createComponent(AnimfaceBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
