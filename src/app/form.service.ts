import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FormService {
    constructor(private http: HttpClient) {}

    getFormHtml() {
        return this.http.get('./assets/data/form-html-result.json');
    }
}