import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public newtext:any;
public rows:any=[];
public url:any=["../assets/ images/image.jpeg","../assets/ images/danger.jpeg","../assets/ images/crab.jpeg",
"../assets/ images/aws.png","../assets/ images/error404.jpg","../assets/ images/night.jpg"];
public displayimage:any=["../assets/ images/image.jpeg"];
public setimage:boolean=true;
public i:any=1;


Newjson=[
    {
      "id": "0001",
      "type": "donut",
      "name": "Cake",
      "ppu": 0.55,
      "batters":
        {
          "batter":
            [
              { "id": "1001", "type": "Regular"},
              { "id": "1002", "type": "Chocolate"},
              { "id": "1003", "type": "Blueberry"},
              { "id": "1004", "type": "Devil's Food"}
            ]
        },
      "topping":
        [
          { "id": "5001", "type": "None" },
          { "id": "5002", "type": "Glazed" },
          { "id": "5005", "type": "Sugar" },
          { "id": "5007", "type": "Powdered Sugar" },
          { "id": "5006", "type": "Chocolate with Sprinkles" },
          { "id": "5003", "type": "Chocolate"},
          { "id": "5004", "type": "Maple" }
        ]
    },
    {
      "id": "0002",
      "type": "donut",
      "name": "Raised",
      "ppu": 0.55,
      "batters":
        {
          "batter":
            [
              { "id": "1001", "type": "Regular"}
            ]
        },
      "topping":
        [
          { "id": "5001", "type": "None" },
          { "id": "5002", "type": "Glazed" },
          { "id": "5005", "type": "Sugar" },
          { "id": "5003", "type": "Chocolate"},
          { "id": "5004", "type": "Maple" }
        ]
    },
    {
      "id": "0003",
      "type": "donut",
      "name": "Old Fashioned",
      "ppu": 0.55,
      "batters":
        {
          "batter":
            [
              { "id": "1001", "type": "Regular"},
              { "id": "1002", "type": "Chocolate"}
            ]
        },
      "topping":
        [
          { "id": "5001", "type": "None" },
          { "id": "5002", "type": "Glazed" },
          { "id": "5003", "type": "Chocolate"},
          { "id": "5004", "type": "Maple" }
        ]
    }
  ]


  // buttonclick(){
  
  //  this.rows.push(this.newtext);
  //   this.newtext=null;
   
  // }
   clickFunction(){
//   //   if(this.setimage){
  
  

//   // }
//   // else{
//   //   this.displayimage=this.url[0];
//   //   this.setimage=!this.setimage;
//   // }


  this.i<this.url.length ?this.displayimage=this.url[this.i]:this.displayimage=this.url[this.i=0];
  this.i++;
 
}


}





