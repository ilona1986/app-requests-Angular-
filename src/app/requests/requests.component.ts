import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Item} from "../item";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  item: Item = new Item(29, 'MyName');
  items!: Item[];
  itemsUrl = '/Items';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getData()
  }

  getData(): void {
    this.http.get<Item[]>(this.itemsUrl).subscribe(
      res => this.items = res,
      err => console.log(err)
    )
  }

  postData(): void {
    if (!this.checkInputs(this.item)) return
    this.http.post<Item>(this.itemsUrl, this.item).subscribe(
      res => this.items.push(res),
      err => console.log(err)
    )
  }

  clearAndGet(): void {
    this.items.length = 0;
    this.getData();
  }

  private checkInputs({id, name}: any): boolean {


    if (!id || !name) {
      alert('Поля ID или Name не заполненны');
      return false;
    }

    if (id <= this.items[this.items.length - 1].id) {
      alert('Введенный ID уже существует');
      return false;
    }

    return true;
  }
}
