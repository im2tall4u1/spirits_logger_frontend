import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Spirit } from '../spirit';
import { SpiritServiceService } from '../spirit-service.service';


@Component({
  selector: 'app-spirits',
  templateUrl: './addspirit.component.html',
  styleUrls: ['./addspirit.component.css']
})

export class AddSpiritComponent{
    spiritToBeAdded:Spirit = new Spirit(0, "", "", "", "", 0, "")
    title = "About"
    constructor(private spiritService:SpiritServiceService){}

    displayText:String = ""

    submit(){
      this.spiritService.addASpirit(this.spiritToBeAdded).subscribe()
      this.displayText = "Spirit Added Successfully: " + this.spiritToBeAdded.brand + " " + this.spiritToBeAdded.name;
      this.spiritToBeAdded = new Spirit(0, "", "", "", "", 0, "");
    }
}