import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSocialAnchorComponent } from './side-social-anchor.component';

describe('SideSocialAnchorComponent', () => {
  let component: SideSocialAnchorComponent;
  let fixture: ComponentFixture<SideSocialAnchorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideSocialAnchorComponent]
    });
    fixture = TestBed.createComponent(SideSocialAnchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
