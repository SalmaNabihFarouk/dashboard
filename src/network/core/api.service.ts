import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient, private loadingService: LoadingService) { }


    get<T>(baseUrl: string, endpoint: string, params?: any): Observable<T> {
        this.loadingService.show();
        return this.http.get<T>(`${baseUrl}/${endpoint}`)

    }
}