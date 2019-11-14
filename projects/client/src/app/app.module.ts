import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ModuleWithProviders } from "@angular/core";

import { AppComponent } from "./app.component";
import { SharedLibraryModule } from "shared-library";
import { ClientTestComponent } from "./client-test/client-test.component";
import { AppRoutingModule } from "./app-routing.module";

const SERVICES = [];

@NgModule({
  declarations: [AppComponent, ClientTestComponent],
  imports: [AppRoutingModule, SharedLibraryModule],
  providers: [...SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule {}

@NgModule({})
export class ClientApp {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: [...SERVICES]
    };
  }
}
