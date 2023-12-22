import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelect2Module } from 'ng-select2';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [SettingsComponent],
  imports: [CommonModule, 
    SettingsRoutingModule, 
    NgxDropzoneModule, 
    FormsModule,
    NgSelectModule,
    
    ReactiveFormsModule,
    ],
    
})
export class SettingsModule {}
