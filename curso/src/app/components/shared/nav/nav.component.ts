import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  id:string ='';
  constructor(
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((map: ParamMap) => {
      let id:string = String(map.get('id'));
      console.log(id);
      this.getMenu(id);
    })
  }

  getMenu(id: string){
    this.id=id;
  }
}
