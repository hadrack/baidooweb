import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepostComponent } from './pages/createpost/createpost.component';
import { ViewallComponent } from './pages/createpost/viewall/viewall.component';
import { ViewpostComponent } from './pages/viewpost/viewpost.component';

const routes: Routes = [
  { path: "createpost", component: CreatepostComponent },
  { path: "viewall", component: ViewallComponent }, // Added missing comma here
  { path: "viewpost/:id", component: ViewpostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }