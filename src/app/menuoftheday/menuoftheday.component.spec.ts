import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuofthedayComponent } from './menuoftheday.component';

describe('MenuofthedayComponent', () => {
  let component: MenuofthedayComponent;
  let fixture: ComponentFixture<MenuofthedayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuofthedayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuofthedayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
