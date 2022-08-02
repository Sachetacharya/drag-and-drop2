import { Component, Input } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @Input() name: string | undefined;


  vamps = [
    { name: "Bad Vamp" },
    { name: "Petrovitch the Slain" },
    { name: "Bob of the Everglades" },
    { name: "The Optimistic Reaper" }
  ];

  vamps2 = [
    { name: "Dracula" },
    { name: "Kurz" },
    { name: "Vladislav" },
    { name: "Deacon" }
  ];

  constructor(private dragulaService: DragulaService) {
   

    // this.dragulaService.createGroup("VAMPIRES", {
     
    // });

    // this.dragulaService.dropModel("VAMPIRES").subscribe(args => {
    //   console.log(args);
    // });
  }
}
