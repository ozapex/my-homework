import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SecondJobComponent } from './second-job/second-job.component';

export const routes: Routes = [
    {path: 'secondJob', component: SecondJobComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}