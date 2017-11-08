import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductFormComponent } from './product-form/product-form.component';

const appRoutes: Routes = [
  {
  path: '',
  component: ProductFormComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
