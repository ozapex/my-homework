import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InyectablesComponentComponent } from './inyectables-component.component';

describe('InyectablesComponentComponent', () => {
  let component: InyectablesComponentComponent;
  let fixture: ComponentFixture<InyectablesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InyectablesComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InyectablesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
