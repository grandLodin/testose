import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeldenbogenComponent } from './app-heldenbogen.component';

describe('AppHeldenbogenComponent', () => {
  let component: AppHeldenbogenComponent;
  let fixture: ComponentFixture<AppHeldenbogenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHeldenbogenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeldenbogenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
