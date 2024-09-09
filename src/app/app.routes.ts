import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./presentation/layout/layout.component').then(
        (m) => m.LayoutComponent
      ),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./presentation/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
      {
        path: 'peliculas',
        loadComponent: () =>
          import('./presentation/movies/movies.component').then(
            (m) => m.MoviesComponent
          ),
      },
      {
        path: 'busqueda',
        loadComponent: () =>
          import('./presentation/search/search.component').then(
            (m) => m.SearchComponent
          ),
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];
