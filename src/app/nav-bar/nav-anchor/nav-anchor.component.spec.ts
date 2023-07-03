import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAnchorComponent } from './nav-anchor.component';

describe('NavAnchorComponent', () => {
  let component: NavAnchorComponent;
  let fixture: ComponentFixture<NavAnchorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavAnchorComponent]
    });
    fixture = TestBed.createComponent(NavAnchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
