import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ThirdJobComponentComponent } from './third-job-component/third-job-component.component';


export const routes: Routes = [
    {path: 'thirdJob', component: ThirdJobComponentComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}