import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTopoComponent } from './menu-topo/menu-topo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MenuTopoComponent
  ],
  declarations: [MenuTopoComponent]
})
export class SharedModule { }
