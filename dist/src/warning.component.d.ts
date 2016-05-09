import { EventEmitter } from '@angular/core';
export declare class JuWarning {
    title: string;
    closeWarning: EventEmitter<{}>;
    timer: any;
    name: string;
    constructor();
    ngOnDestroy(): void;
}
