import { Routes } from '@angular/router';
import { RoutesComponent } from './routes/routes.component';
import { SlugComponent } from './slug/slug.component';
import { ChildComponentComponent } from './slug/child-component/child-component.component';

export const routes: Routes = [
    {path:'lazy', loadComponent: () => import('./my-lazy-component/my-lazy-component.component')
    .then((m) =>m.MyLazyComponentComponent),},
    {path:'simpleRoute', component:RoutesComponent},
    {path:'slug/:slug', component:SlugComponent,
        children:[
            {path:'child/:childSlug', component:ChildComponentComponent}
        ]
    }
];
