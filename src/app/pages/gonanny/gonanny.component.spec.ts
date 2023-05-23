import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GonannyComponent } from './gonanny.component';

describe('GonannyComponent', () => {
  let component: GonannyComponent;
  let fixture: ComponentFixture<GonannyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GonannyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GonannyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
