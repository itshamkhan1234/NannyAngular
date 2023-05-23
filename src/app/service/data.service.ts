import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class DataService {

    public loaderData = new BehaviorSubject<boolean>(false);
    loaderDataObservable = this.loaderData.asObservable();

    constructor() { }

}