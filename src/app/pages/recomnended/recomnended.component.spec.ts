import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomnendedComponent } from './recomnended.component';

describe('RecomnendedComponent', () => {
  let component: RecomnendedComponent;
  let fixture: ComponentFixture<RecomnendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomnendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomnendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
