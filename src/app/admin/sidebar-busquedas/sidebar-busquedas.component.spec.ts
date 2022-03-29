import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBusquedasComponent } from './sidebar-busquedas.component';

describe('SidebarBusquedasComponent', () => {
  let component: SidebarBusquedasComponent;
  let fixture: ComponentFixture<SidebarBusquedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarBusquedasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarBusquedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
