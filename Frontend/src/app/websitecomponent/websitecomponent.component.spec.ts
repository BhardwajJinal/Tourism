import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitecomponentComponent } from './websitecomponent.component';

describe('WebsitecomponentComponent', () => {
  let component: WebsitecomponentComponent;
  let fixture: ComponentFixture<WebsitecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsitecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsitecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
