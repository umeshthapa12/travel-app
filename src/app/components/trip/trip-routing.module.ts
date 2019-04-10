import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { UserTripsResolver } from 'src/app/core/resolvers/user-trips.resolver';

const routes: Routes =[
  { path: "", pathMatch: "full", redirectTo: "mine" },
  {
    path:'create',
    component:CreateComponent,
  },
  {
    path:'featured/create',
    component:CreateComponent,
  },
  {
    path:'edit/:id',
    component:EditComponent,
  },
  {
    path:'featured/edit/:id',
    component:EditComponent,
  },
  {
    path:'mine',
    component:TripListComponent,
    resolve:{tripsList: UserTripsResolver}
  },
  {
    path:'featured/all',
    component:TripListComponent,
  },
  {
    path:'details/:id',
    component:TripDetailsComponent,
  },
  {
    path:'featured/details/:id',
    component:TripDetailsComponent,
  },
];

@NgModule({
  imports: [
  RouterModule.forChild(routes)
],
  exports: [],
  providers:[
    UserTripsResolver,
  ]
})

export class TripRoutingModule {} 
