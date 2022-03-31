import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MaterialShareModule } from "../material.share.module";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
    {
        'path': 'profile',
        component: ProfileComponent
    },
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        MaterialShareModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        ProfileComponent,
    ]
})

export class DashboardModule { }