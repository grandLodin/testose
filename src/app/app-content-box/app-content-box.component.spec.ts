import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContentBoxComponent } from './app-content-box.component';

describe('AppContentBoxComponent', () => {
  let component: AppContentBoxComponent;
  let fixture: ComponentFixture<AppContentBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContentBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
