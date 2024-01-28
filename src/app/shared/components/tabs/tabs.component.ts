import { AfterContentInit, Component, ContentChildren, Input, QueryList, WritableSignal, effect, signal } from '@angular/core';
import { TabItemComponent } from './components/tab-item/tab-item.component';
import { startWith, delay, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Position } from '../../../core/enum';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent implements AfterContentInit{
  @ContentChildren(TabItemComponent) tabs!: QueryList<TabItemComponent>;
  tabItems: WritableSignal<TabItemComponent[]> = signal([])
  activeTab: TabItemComponent;
  @Input() position: Position = Position.left;
  effectChange = effect(() => {
    if (!this.activeTab) {
      this.activeTab = this.tabItems()[0]
    }
  })

  selectTab(tabItem: TabItemComponent) {
    if (this.activeTab === tabItem) {
      return;
    }
    if (this.activeTab) {
      this.activeTab.isActive = false;
    }
    this.activeTab = tabItem;
    tabItem.isActive = true;
  }

  /**
   * Called after ngOnInit when the component's or directive's content has been initialized.
   * Add 'implements AfterContentInit' to the class.
   * @memberof TabsComponent
   */
  ngAfterContentInit(): void {
    this.tabs.changes
      .pipe(startWith(""))
      .pipe(delay(0))
      .pipe(map(() => this.tabs.toArray())).subscribe(
        tabs => this.tabItems.set(tabs)
      )
  }
}
