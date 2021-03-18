import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@tq/material';
import { NavContainerComponent } from './nav-container/nav-container.component';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [NavContainerComponent],
  exports: [NavContainerComponent]
})
export class UiModule {}
