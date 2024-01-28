import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLabelComponent } from './tab-label.component';

describe('TabLabelComponent', () => {
  let component: TabLabelComponent;
  let fixture: ComponentFixture<TabLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabLabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
