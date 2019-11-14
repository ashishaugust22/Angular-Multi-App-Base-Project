import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StepsComponent } from "./steps/steps.component";
import { ClientApp } from "projects/client/src/app/app.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent, StepsComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, ClientApp.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
