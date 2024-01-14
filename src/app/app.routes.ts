import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'top',
    // resolve: {
    //   data: TopDataResolver
    // },
    loadComponent: () => import('./top/top.component').then(mod => mod.TopComponent)
  },
  {
    path: 'products/list',
    // resolve: {
    //   data: ProductsListDataResolver
    // },
    loadComponent: () => import('./products-list/products-list.component').then(mod => mod.ProductsListComponent)
  },
  {
    path: 'details',
    // resolve: {
    //   data: DetailsDataResolver
    // },
    loadComponent: () => import('./details/details.component').then(mod => mod.DetailsComponent)
  },
  {
    path: 'payment',
    // resolve: {
    //   data: PaymentDataResolver
    // },
    loadComponent: () => import('./payment/payment.component').then(mod => mod.PaymentComponent)
  },
  {
    path: 'auth',
    // resolve: {
    //   data: AuthDataResolver
    // },
    loadComponent: () => import('./auth/auth.component').then(mod => mod.AuthComponent)
  },
  {
    path: 'contact',
    // resolve: {
    //   data: ContactDataResolver
    // },
    loadComponent: () => import('./contact/contact.component').then(mod => mod.ContactComponent)
  },
  {
    path: 'mypage',
    // resolve: {
    //   data: MypageDataResolver
    // },
    loadComponent: () => import('./mypage/mypage.component').then(mod => mod.MypageComponent)
  },
  {
    path: '',
    redirectTo: 'top',
    pathMatch: 'full'
    // loadComponent: () => import('./not-found-page/not-found-page.component').then(mod => mod.NotFoundPageComponent)
  }
];
