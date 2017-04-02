import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Headers, Http } from '@angular/http';

const URL = 'http://localhost:3001/upload';
// const URL = '/files/'

@Component({
    selector: 'homepage',
    templateUrl: './app/pages/homepage.component.html'
})

export class HomepageComponent {
    public uploader:FileUploader = new FileUploader({url:URL});
    public data: any;
    constructor(private http: Http) {
      console.log(this.uploader);
      this.uploader.setOptions({autoUpload: true});
     }
     displayFile(item: any){
       console.log(item)
        this.http.get('../../uploads/' + item.file.name)
                .subscribe(res => this.data = res);
                console.log(this.data)

     }
}
