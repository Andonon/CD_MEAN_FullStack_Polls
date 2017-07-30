import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolldetailComponent } from './polldetail.component';

describe('PolldetailComponent', () => {
  let component: PolldetailComponent;
  let fixture: ComponentFixture<PolldetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolldetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
