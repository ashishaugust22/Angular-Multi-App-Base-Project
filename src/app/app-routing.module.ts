import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StepsComponent } from "./steps/steps.component";

const routes: Routes = [
  {
    path: "steps",
    component: StepsComponent
  },
  {
    path: "client",
    // loadChildren: "../../projects/app1/src/app/app.module#App1SharedModule"
    loadChildren: () =>
      import("../../projects/client/src/app/app.module").then(m => m.ClientApp)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
