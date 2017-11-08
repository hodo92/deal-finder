import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { HeaderComponent } from './header/header.component';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';


const appRoutes: Routes = [
  {
    path: '',
    component: ProductFormComponent,
    outlet: 'prodForm'
  },
  {
    path: '',
    component: HeaderComponent,
    outlet: 'siteHeader'
  },
  {
    path: 'public',
    component: PublicComponent
  },
  {
    path: 'private',
    component: PrivateComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
