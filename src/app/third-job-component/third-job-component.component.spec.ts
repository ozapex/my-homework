import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdJobComponentComponent } from './third-job-component.component';

describe('ThirdJobComponentComponent', () => {
  let component: ThirdJobComponentComponent;
  let fixture: ComponentFixture<ThirdJobComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdJobComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdJobComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
