import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemWordTooltipComponent } from './poem-word-tooltip.component';

describe('PoemWordTooltipComponent', () => {
  let component: PoemWordTooltipComponent;
  let fixture: ComponentFixture<PoemWordTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoemWordTooltipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoemWordTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
