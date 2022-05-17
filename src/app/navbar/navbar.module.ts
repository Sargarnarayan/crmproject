import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowUpComponent } from './follow-up/follow-up.component';
import { WalkinComponent } from './walkin/walkin.component';
import { InfutureComponent } from './infuture/infuture.component';
import { EnrolledComponent } from './enrolled/enrolled.component';
import { ClosedComponent } from './closed/closed.component';
import { ReferedComponent } from './refered/refered.component';
import { ReenqiredComponent } from './reenqired/reenqired.component';
import { OnlineComponent } from './online/online.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from "primeng/button";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FreshComponent } from './fresh/fresh.component';

const route: Routes=[
  {path: 'follow-up', component: FollowUpComponent},
  {path: 'fresh', component: FreshComponent},
  {path: 'walkin',component: WalkinComponent},
  {path: 'infuture', component: InfutureComponent},
  {path: 'enrolled', component: EnrolledComponent},
  {path: 'closed', component: ClosedComponent},
  {path: 'refered', component: ReferedComponent},
  {path: 'reenqired', component: ReenqiredComponent},
  {path: 'online', component: OnlineComponent}
]

@NgModule({
  declarations: [
    FollowUpComponent,
    WalkinComponent,
    InfutureComponent,
    EnrolledComponent,
    ClosedComponent,
    ReferedComponent,
    ReenqiredComponent,
    OnlineComponent,
    FreshComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,   
    MatDividerModule,
    [RouterModule.forChild(route)]
  ]
})
export class NavbarModule { }
