import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:3001/upload';
// const URL = '/files/'

@Component({
    selector: 'homepage',
    templateUrl: './app/pages/homepage.component.html'
})

export class HomepageComponent {
    public uploader:FileUploader = new FileUploader({url:URL});
    constructor() {
      console.log(this.uploader)
     }

}
