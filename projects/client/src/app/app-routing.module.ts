import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClientTestComponent } from "./client-test/client-test.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  {
    path: "2",
    component: AppComponent
  },
  {
    path: "1",
    component: ClientTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
