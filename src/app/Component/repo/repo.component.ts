
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit { 
  
 
// gty(arg0: number) {
// throw new Error('Method not implemented.');
// }
  mapArray: any[] =[];
  totalrecords!: any;
  page: number = 1;


  constructor(private service: ServiceService ) { }

  ngOnInit(): void { 
    this.service.getData().then((data : string | any[])=>{
      console.log(">>>>>>>>>>", data)
      for (let i = 0; i < data.length; i++) {
        this.mapArray.push({
          name: data[i].name,
          visibility: data[i].visibility,
          describtion: data[i].describtion,
          language: data[i].language,
        });console.log("array",this.mapArray)
        this.page = 0;
      }
      this.totalrecords = data.length;
    });
  }
  // mapArray(arg0: string, mapArray: any) {
  //   throw new Error('Method not implemented.');
  // }
   gty(page: any){
    console.log(page,'<<')

  }

}
