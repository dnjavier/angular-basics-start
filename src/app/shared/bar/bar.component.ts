import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnChanges {
    @Input() bar: number;
    iconWidth: number;
    @Output() barClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.iconWidth = this.bar * 75 / 5;
    }

    onClick(): void {
        this.barClicked.emit('The bar ' + this.bar + ' was clicked!');
    }
}
