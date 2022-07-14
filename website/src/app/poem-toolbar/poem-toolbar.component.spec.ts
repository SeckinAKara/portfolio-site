import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemToolbarComponent } from './poem-toolbar.component';

describe('PoemToolbarComponent', () => {
  let component: PoemToolbarComponent;
  let fixture: ComponentFixture<PoemToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoemToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoemToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
