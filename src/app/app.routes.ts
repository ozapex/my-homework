import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'dataBinding', component: DataBindingComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule],
})

export class AppRoutingModule{}