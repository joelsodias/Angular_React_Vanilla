import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  
  @Input() personname:string | undefined;
  @Input() imageurl:string | undefined;
  @Input() jobtitle:string | undefined;
  @Input() websiteurl:string | undefined;
  @Input() facebookurl:string | undefined;
  @Input() twitterurl:string | undefined;
  @Input() githuburl:string | undefined;
  @Input() linkedinurl:string | undefined;
  
  @HostBinding("style.--backgroundcolor")
  @Input() backgroundcolor:string | undefined;
  
  @HostBinding("style.--decorationcolor")
  @Input() decorationcolor:string | undefined;
  
  @HostBinding("style.--textcolor")
  @Input() textcolor:string | undefined;


  constructor() { 

    console.log(this);

    
  }
  
  ngOnInit() {
    //console.log(document.styleSheets)
    if (this.decorationcolor == "random") { this.decorationcolor = this.randomcolor() } 
    console.log(this)
  }

  randomcolor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
