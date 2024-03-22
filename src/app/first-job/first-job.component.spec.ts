import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstJobComponent } from './first-job.component';

describe('FirstJobComponent', () => {
  let component: FirstJobComponent;
  let fixture: ComponentFixture<FirstJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
