import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    private loadingSubject = new BehaviorSubject<boolean>(false);
    loading$: Observable<boolean> = this.loadingSubject.asObservable();

    private loadingCount = 0;

    constructor(private zone: NgZone) { }

    show(): void {
        this.loadingCount++;
        Promise.resolve().then(() => {
            this.zone.run(() => {
                this.loadingSubject.next(true);
            });
        });
    }

    hide(): void {
        if (this.loadingCount > 0) this.loadingCount--;
        if (this.loadingCount > 0) return;
        Promise.resolve().then(() => {
            this.zone.run(() => this.loadingSubject.next(false));
        });
    }
}
