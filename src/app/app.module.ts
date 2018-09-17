import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule, 
  MatCheckboxModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatDialogModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { TbmComponent } from './tbm/tbm.component';
import { CompareComponent, DialogOverviewExampleDialog } from './compare/compare.component';

@NgModule({
  declarations: [
    AppComponent,
    TbmComponent,
    CompareComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  entryComponents: [
    DialogOverviewExampleDialog
  ],
  providers: [], //{provide: MAT_DATE_LOCALE, useValue: "de-DE"}
  bootstrap: [AppComponent]
})
export class AppModule { }
