import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondJobComponent } from './second-job.component';

describe('SecondJobComponent', () => {
  let component: SecondJobComponent;
  let fixture: ComponentFixture<SecondJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
