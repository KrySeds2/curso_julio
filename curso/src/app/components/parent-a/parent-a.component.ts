import { Component, OnInit } from '@angular/core';
import { WatchService } from 'src/app/services/watch.service';

@Component({
  selector: 'custom-parent-a',
  templateUrl: './parent-a.component.html',
  styleUrls: ['./parent-a.component.scss']
})
export class ParentAComponent implements OnInit {
  value: any = {};
  selectedData:any;

  listItems = [
    {
      total: 'proyecto burgos',
      id: '3769b0c5-b0ea-54d6-908d-d28f441d5cbc',
      description: 'loremipsum dolor sit amet, consectetur adipiscing',
      version:'0.5',
      title: 'Cotizacion de enero',
      image:'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png'
    },
    {
      total: 'proyecto burgos',
      id: '3fe7b73c-cbab-5830-9e74-e4fe7dfd9dc2',
      description: 'loremipsum dolor sit amet, consectetur adipis',
      version:'0.5',
      title: 'Cotizacion de febrero',
      image:'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png'
    },
    {
      total: 'proyecto burgos',
      id: 'acbebec2-218b-51f9-80fd-d9762e8fd4df',
      description: 'loremipsum dolor sit amet, consectetur adipiscing',
      version:'0.5',
      title: 'Cotizacion de marzo',
      image:'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png'    },
    {
      total: 'proyecto burgos',
      id: 'f266d343-ccda-59a9-bd8e-9daea1282707',
      description: 'loremipsum dolor sit amet, consectetur adipiscing',
      version:'0.6',
      title: 'Cotizacion de abril',
      image:'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png'    },
    {
      total: 'proyecto burgos',
      id: 'f4f2eefa-bc17-5b6d-a102-8b113225b24a',
      description: 'loremipsum dolor sit amet, consectetur adipis',
      version:'0.6',
      title: 'Cotizacion de mayo',
      image:'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png'    },
    {
      total: 'proyecto burgos',
      id: '3b1a57dc-abca-5d23-83af-5b52f50c8928',
      description: 'loremipsum dolor sit amet, consectetur adipis',
      version:'0.6',
      title: 'Cotizacion de junio',
      image:'https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_1280.png'    }
  ];
  constructor(private watch2: WatchService) {

  }
  ngOnInit(): void {
    // this.receiveChildB();
  }

  onChangeItem(id: string) {
    console.log('Se ejecuto evento hijo: ' + id)
  }

  receiveChildData(data: any) {
    // Accede a los datos emitidos desde el componente hijo
    this.selectedData = data;
    console.log('datos recibidos')

  }

  // receiveChildB() {
  //   this.watch2.getWatchValue().subscribe(resp => {
  //     console.log(resp);
  //   })
  // }
}
