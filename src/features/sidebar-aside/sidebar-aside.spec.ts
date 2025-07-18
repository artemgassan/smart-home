import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAside } from './sidebar-aside';

describe('SidebarAside', () => {
  let component: SidebarAside;
  let fixture: ComponentFixture<SidebarAside>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarAside]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarAside);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
