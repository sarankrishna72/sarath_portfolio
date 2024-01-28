import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBodyComponent } from './tab-body.component';

describe('TabBodyComponent', () => {
  let component: TabBodyComponent;
  let fixture: ComponentFixture<TabBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
