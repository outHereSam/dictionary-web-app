import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSwitcherComponent } from './font-switcher.component';

describe('FontSwitcherComponent', () => {
  let component: FontSwitcherComponent;
  let fixture: ComponentFixture<FontSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontSwitcherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FontSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
