import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Spirit } from '../spirit';
import { SpiritServiceService } from '../spirit-service.service';


@Component({
  selector: 'app-spirits',
  templateUrl: './spirits.component.html',
  styleUrls: ['./spirits.component.css']
})

export class SpiritsComponent implements OnInit{
    spirits:Spirit[] = []
    filteredSpirits:Spirit[] = []
    query:string = ""
    category:string = "brand"
    title = "Spirits"
    constructor(private spritservice:SpiritServiceService){}

    ngOnInit(){
      this.spritservice.getAllSpirits().subscribe(data =>{
        this.spirits = data
        this.filteredSpirits = data
      });
    }

    search(){
      if (this.category == "brand"){
        this.searchByBrand(this.query)
      } else if (this.category == "color"){
        this.searchByColor(this.query)
      } else if (this.category == "name"){
        this.searchByName(this.query)
      }
    }

    searchByName(query:string){
      this.filteredSpirits = this.spirits.filter(x => x.name.toLowerCase().includes(query.toLowerCase()))
    }

    searchByBrand(query:string){
      this.filteredSpirits = this.spirits.filter(x => x.brand.toLowerCase().includes(query.toLowerCase()))
    }

    searchByColor(query:string){
      this.filteredSpirits = this.spirits.filter(x => x.color.toLowerCase().includes(query.toLowerCase()))
    }

}

