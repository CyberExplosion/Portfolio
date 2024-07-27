import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkBgComponent } from './link-bg.component';

describe('LinkBgComponent', () => {
  let component: LinkBgComponent;
  let fixture: ComponentFixture<LinkBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkBgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
