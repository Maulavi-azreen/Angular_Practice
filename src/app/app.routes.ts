import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LearningComponent } from './learning/learning.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { ForloopComponent } from './controlflow/forloop.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsComponent } from './forms/forms.component';
import { GetAPIComponent } from './get-api/get-api.component';
import { PostApiComponent } from './post-api/post-api.component';
import { UpdateApiComponent } from './update-api/update-api.component';
import { DeleteAPIComponent } from './delete-api/delete-api.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { HostlistenerComponent } from './hostlistener/hostlistener.component';
import { ChildComponent } from './child/child.component';


export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'learn', component:LearningComponent},
    {path:'if-else', component:IfelseComponent},
    {path:'for-loop', component:ForloopComponent},
    {path:'pipes', component:PipesComponent},
    {path:'form', component:FormsComponent},
    {path:'get-users', component:GetAPIComponent},
    {path:'post-api', component:PostApiComponent},
    {path:'update-api', component:UpdateApiComponent},
    {path:'delete-api', component:DeleteAPIComponent},
    {path:'life-cycle', component:LifeCycleComponent},
    {path:'hostlistener', component:HostlistenerComponent},
    {path:'input-output', component:ChildComponent},
];

export const routing = RouterModule.forRoot(routes);
