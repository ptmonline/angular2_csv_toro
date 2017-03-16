import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
    selector: 'homepage',
    templateUrl: './app/pages/homepage.component.html'
})

export class HomepageComponent {
    public uploader:FileUploader = new FileUploader({url: URL});
    constructor() { }
    
}