import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    NzCardModule,
    NzMenuModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzCollapseModule,
    NzIconModule,
    NzProgressModule,
    NzModalModule,
    NzSelectModule,
    NzTabsModule,
    NzDatePickerModule,
    NzTableModule,
    NzDividerModule,
    NzSpinModule
  ],
  exports : [
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    NzCardModule,
    NzMenuModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzCollapseModule,
    NzIconModule,
    NzProgressModule,
    NzModalModule,
    NzSelectModule,
    NzTabsModule,
    NzDatePickerModule,
    NzTableModule,
    NzDividerModule,
    NzSpinModule
  ]
})
export class AntDesignModule { }
