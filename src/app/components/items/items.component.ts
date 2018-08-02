import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: any[] = [
    {
    name: "Name Product 1",
    price: "$91.56",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem sit amet consectetur adipisicing elit.",
    id: 1,
    review: [
      {
        name: "buyer 1",
          text: "Ipsum dolor sit amet consectetur adipisicing elit. Lorem sit amet consectetur adipisicing elit."
      }
    ]
  },
  {
    name: "Name Product 2",
    price: "$126.14",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem sit amet consectetur adipisicing elit.",
    id: 2,
    review: [
      {
        name: "buyer 2",
          text: "Orem ipsum dolor sit amet consectetur adipisicing elit. Lorem sit amet consectetur adipisicing elit."
      },
      {
        name: "buyer 3",
        text: "Dolor sit amet consectetur adipisicing elit. Lorem sit amet consectetur adipisicing elit."
      }
    ]
  },
  {
    name: "Name Product 3",
    price: "$91.56",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem sit amet consectetur adipisicing elit.",
    id: 3,
    review: [
      {
        name: "buyer 4",
        text: "Ipsum dolor sit amet consectetur adipisicing elit. Lorem sit amet consectetur adipisicing elit."
      }
    ]
  },
  {
    name: "Name Product 4",
    price: "$126.14",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem sit amet consectetur adipisicing elit.",
    id: 4,
    review: [
      {
        name: "buyer 5",
        text: "Orem ipsum dolor sit amet consectetur adipisicing elit. Lorem sit amet consectetur adipisicing elit."
      },
      {
        name: "buyer 6",
        text: "Dolor sit amet consectetur adipisicing elit. Lorem sit amet consectetur adipisicing elit."
      }
    ]
  }
];

  constructor() { }

  ngOnInit() {
  }

  deleteCard(id) {
      for (let i in this.items) {
          if(this.items[i].id === id) {
              this.items.splice(Number(i), 1);
          }
      }
  }
}
