import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  msg='<h1>html标签<h1>';
  public userinfo:object={
    username:"张三"
  }
  arr=['1111','4444','2333']
  public list:any[]=['1111','4444','2333']
  public items:Array<string>=['1111','4444','2333']
  constructor() { 
    this.userinfo["id"]=38;
  }

  ngOnInit() {
  }

}
