import { NgModule } from "@angular/core";
import { SharedLibraryComponent } from "./shared-library.component";
import { TestComponent } from "./test/test.component";

@NgModule({
  declarations: [SharedLibraryComponent, TestComponent],
  imports: [],
  exports: [SharedLibraryComponent, TestComponent]
})
export class SharedLibraryModule {}
