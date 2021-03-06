import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-scrollbar-example-4',
    templateUrl: './template.html',
    styleUrls: ['./style.less'],
    changeDetection,
    encapsulation,
})
export class TuiScrollbarExample4Component {}
