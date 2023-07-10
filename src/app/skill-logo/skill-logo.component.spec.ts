import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillLogoComponent } from './skill-logo.component';

describe('SkillLogoComponent', () => {
  let component: SkillLogoComponent;
  let fixture: ComponentFixture<SkillLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillLogoComponent]
    });
    fixture = TestBed.createComponent(SkillLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
