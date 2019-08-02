import { Component, OnInit } from '@angular/core';
import { ResourceService } from './shared/resource.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  content = '';
  message = '';
  wordCountList = [];

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.getWordCountList();
  }

  getWordCountList() {
    console.log('Inside getWordCountList');
    this.resourceService.getAll('wordcount')
      .subscribe((res) => {
        this.wordCountList = res.data;
      }, (err) => {
        console.log(err);
      });
  }

  submit() {
    this.resourceService.post('wordcount', { content: this.content })
      .subscribe((res) => {
        this.content = '';
        this.message = 'Saved successfully and count is updated.';
        this.getWordCountList();
        setTimeout(() => {
          this.message = '';
        }, 3000);
      }, (err) => {
        console.log(err);
      });
  }
}
