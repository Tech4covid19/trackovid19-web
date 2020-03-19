import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostCodeComponent } from './post-code.component';
import { PostalCodeRoutingModule } from './post-code.routing.module';

@NgModule({
  declarations: [PostCodeComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PostalCodeRoutingModule],
  exports: [PostCodeComponent],
})
export class PostCodeModule {}
