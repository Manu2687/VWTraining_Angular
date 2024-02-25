import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterbookComponent } from './components/registerbook/registerbook.component';
import { ListbookComponent } from './components/listbook/listbook.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


export const routes: Routes = [

    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'register',
        component:RegisterbookComponent
    },
    {
        path:'listbook',
        component:ListbookComponent
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'**',
        component:NotFoundComponent
    },



];
