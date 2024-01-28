import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsxWindowComponent } from './osx-window.component';

describe('OsxWindowComponent', () => {
  let component: OsxWindowComponent;
  let fixture: ComponentFixture<OsxWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsxWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OsxWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
