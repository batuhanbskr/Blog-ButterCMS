import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'detail/:slug', component: DetailComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule {}