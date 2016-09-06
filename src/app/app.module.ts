import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";
 
import { AppComponent } from "./app.component";
 
@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // For template-driven approach
    ReactiveFormsModule, // For data-driven approach
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}