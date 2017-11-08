import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

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
    path: '',
    component: FooterComponent,
    outlet: 'siteFooter'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
