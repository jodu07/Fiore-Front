import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForPlayerComponent } from './for-player.component';

describe('ForPlayerComponent', () => {
  let component: ForPlayerComponent;
  let fixture: ComponentFixture<ForPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
