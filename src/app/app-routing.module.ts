import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from "src/app/components/task/task.component";

const routes: Routes = [
  { path: '', redirectTo: 'task', pathMatch: 'full' },
  { path: 'task', component: TaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
