import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserViewComponent } from './user-view/user-view.component';
import { AuthGuard } from './auth-guard.service';

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
  },
  {
  path: 'user-view',
  component: UserViewComponent,
  canActivate: [AuthGuard]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
