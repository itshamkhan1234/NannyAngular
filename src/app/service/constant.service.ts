import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  verticals = new Subject<any>()
  updateVerticals = new Subject<any>()
  theProcess = new Subject<any>()

  constructor(@Inject(PLATFORM_ID) private _platformId: Object) { }

  isBrowser() {
    if (isPlatformBrowser(this._platformId)) {
      return true;
    }
    return false;
  }
  
}
