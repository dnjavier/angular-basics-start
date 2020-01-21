import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar/bar.component';
import { FormsModule } from '@angular/forms';
import { FormatGenderPipe } from './format-gender.pipe';



@NgModule({
  declarations: [
    BarComponent,
    FormatGenderPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BarComponent,
    FormatGenderPipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
