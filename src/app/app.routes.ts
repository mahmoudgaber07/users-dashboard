import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'users/:id',
        component: UserDetailsComponent
    },

];
