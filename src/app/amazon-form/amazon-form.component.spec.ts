import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonFormComponent } from './amazon-form.component';

describe('AmazonFormComponent', () => {
  let component: AmazonFormComponent;
  let fixture: ComponentFixture<AmazonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmazonFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
