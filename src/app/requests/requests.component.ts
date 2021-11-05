import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Item} from "../item";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  item: Item = new Item(null, null);
  items!: Item[];
  itemsUrl = '/Items';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getData()
  }

  getData(): void {
    const url = this.itemsUrl
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let params = new HttpParams();

    if (this.item.id) {
      params = params.set('id', `${this.item.id}`);
    }

    if (this.item.name) {
      params = params.set('name', `${this.item.name}`);
    }

    const options = {headers, params};

    this.http.get<Item[]>(url, options).subscribe(
      res => this.items = res,
      err => console.log(err)
    )
  }

  postData(): void {
    const url = this.itemsUrl;
    const data = this.item;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const options = {headers};

    this.http.post<Item>(url, data, options).subscribe(
      res => this.items.push(res),
      err => console.log(err)
    )
  }

  clearAndGet(): void {
    this.items.length = 0;
    this.getData();
  }

  private checkInputs({id, name}: any): boolean {
    // if (!this.checkInputs(this.item)) return
    if (!id || !name) {
      alert('Поля ID или Name не заполненны');
      return false;
    }

    if (this.items && id <= (this.items as any)[this.items.length - 1].id) {
      alert('Введенный ID уже существует');
      return false;
    }

    return true;
  }
}
