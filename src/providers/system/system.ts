import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

/*
  Generated class for the SystemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SystemProvider {

	rootUrl: string = 'https://jsonplaceholder.typicode.com';
	posts: string = 'posts';
	comments: string = 'comments';
	albums: string = 'albums';
	photos: string = 'photos';
	todos: string = 'todos';
	users: string = 'users';

	constructor(public http: Http) {
		console.log('Hello SystemProvider Provider');
	}

	getPosts() {
		return this.http.get(`${this.rootUrl}/${this.posts}`).map(res => res.json()).take(1);
	}
	getPostById(id: number) {
		return this.http.get(`${this.rootUrl}/${this.posts}/${id}`).map(res => res.json()).take(1);
	}

	getComments() {
		return this.http.get(`${this.rootUrl}/${this.comments}`).map(res => res.json()).take(1);
	}
	getCommentById(id: number) {
		return this.http.get(`${this.rootUrl}/${this.comments}/${id}`).map(res => res.json()).take(1);
	}

	getAlbums() {
		return this.http.get(`${this.rootUrl}/${this.albums}`).map(res => res.json()).take(1);
	}
	getAlbumById(id: number) {
		return this.http.get(`${this.rootUrl}/${this.albums}/${id}`).map(res => res.json()).take(1);
	}

	getPhotos() {
		let offset = 0; // page start with this index of item
		let limit = 500; // items size per page (pp)
		return this.http.get(`${this.rootUrl}/${this.photos}`).map(res => res.json().slice(offset, offset + limit)).take(1);
	}
	getPhotoById(id: number) {
		return this.http.get(`${this.rootUrl}/${this.photos}/${id}`).map(res => res.json()).take(1);
	}

	getTodos() {
		return this.http.get(`${this.rootUrl}/${this.todos}`).map(res => res.json()).take(1);
	}
	getTodoById(id: number) {
		return this.http.get(`${this.rootUrl}/${this.todos}/${id}`).map(res => res.json()).take(1);
	}

	getUsers() {
		return this.http.get(`${this.rootUrl}/${this.users}`).map(res => res.json()).take(1);
	}
	getUserById(id: number) {
		return this.http.get(`${this.rootUrl}/${this.users}/${id}`).map(res => res.json()).take(1);
	}


}
