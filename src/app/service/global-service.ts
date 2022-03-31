import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { RegisterUser, User } from "./user.interface";

@Injectable({
    providedIn: 'root'
})

export class GlobalService {

    logIn: boolean = false;
    constructor(
        private httpClient: HttpClient,
    ) {

    }

    registerUser(reqData: RegisterUser): Observable<any> {
        const params = new HttpParams()
            .set('name', reqData.name)
            .append('email', reqData.email)
            .append('password', reqData.password)
            .append('bio', reqData.bio);

        return this.httpClient.get<any>('https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d', {
            params: params
        })
    }

    getUserData(): Observable<User> {
        return this.httpClient.get<User>('https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2');
    }

    loggedIn() {
        return this.logIn;
    }

}