import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduralBgComponent } from './procedural-bg.component';

describe('ProceduralBgComponent', () => {
  let component: ProceduralBgComponent;
  let fixture: ComponentFixture<ProceduralBgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProceduralBgComponent]
    });
    fixture = TestBed.createComponent(ProceduralBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
