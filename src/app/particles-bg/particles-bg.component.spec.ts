import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticlesBgComponent } from './particles-bg.component';

describe('ParticlesBgComponent', () => {
  let component: ParticlesBgComponent;
  let fixture: ComponentFixture<ParticlesBgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticlesBgComponent]
    });
    fixture = TestBed.createComponent(ParticlesBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
