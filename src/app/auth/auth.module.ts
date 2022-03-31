import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MaterialShareModule } from "../material.share.module";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {
        'path': '',
        component: RegisterComponent
    },
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        MaterialShareModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        RegisterComponent,
    ]
})

export class AuthModule { }