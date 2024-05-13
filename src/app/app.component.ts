import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './service/youtube.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { takeUntil } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Youtube';
  videos:any[]=[]

  constructor(private spinner:NgxSpinnerService,private youtubeservice: YoutubeService){}

  ngOnInit(){
this.spinner.show()
setTimeout(()=>{
  this.spinner.hide()
},3000)
this.videos=[]
this.youtubeservice.getVideosForChanel('UCDW5yeWQk1ym8YhctAN0erA',10).subscribe((lista:any)=>{
  for(let element of lista["items"]){
    this.videos.push(element)
  }
})
  }
}
