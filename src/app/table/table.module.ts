import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { UsersComponent } from './users/users.component';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material-module';
import { LayoutModule } from '@angular/cdk/layout';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    MaterialModule,
    LayoutModule,
    FormsModule,
    HttpClientModule
  ]
})
export class TableModule { }
