import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFixturesComponent } from './page-fixtures.component';

describe('PageFixturesComponent', () => {
  let component: PageFixturesComponent;
  let fixture: ComponentFixture<PageFixturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFixturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
