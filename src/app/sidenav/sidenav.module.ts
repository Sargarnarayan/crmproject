import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyfollowupsComponent } from './myfollowups/myfollowups.component';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { FailedlistComponent } from './failedlist/failedlist.component';
import { MarketingComponent } from './marketing/marketing.component';
import { DripmarketingComponent } from './dripmarketing/dripmarketing.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingComponent } from './setting/setting.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes=[
  {path: 'myfollowups', component: MyfollowupsComponent},
  {path: 'chatlist', component: ChatlistComponent},
  {path: 'failedlist', component: FailedlistComponent},
  {path: 'marketing', component:MarketingComponent},
  {path: 'dripmarketing', component: DripmarketingComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'setting', component: SettingComponent}
]

@NgModule({
  declarations: [
    MyfollowupsComponent,
    ChatlistComponent,
    FailedlistComponent,
    MarketingComponent,
    DripmarketingComponent,
    ReportsComponent,
    SettingComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class SidenavModule { }
