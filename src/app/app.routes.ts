import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstModuleModule } from './my-first-module/my-first-module.module';

export const routes: Routes = [
    {path: 'myFifth', loadChildren: () => 
    import('./my-first-module/my-first-module.module').
    then((m)=>m.MyFirstModuleModule)}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRouting {}