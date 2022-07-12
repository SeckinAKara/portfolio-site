import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemInfoComponent } from './poem-info.component';

describe('PoemInfoComponent', () => {
  let component: PoemInfoComponent;
  let fixture: ComponentFixture<PoemInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoemInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
