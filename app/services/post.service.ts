/**
 * @author Temur Mahmudov
 */
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';
import {Post} from './post';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostService {
    private url = "http://jsonplaceholder.typicode.com/posts";

    constructor(private http: Http) {

    }

    getPost(): Observable<Post[]>{
        return this.http.get(this.url)
                .map(res => res.json());
    }

    createPost(post: Post){
        return this.http.post(this.url, JSON.stringify(post))
                .map(res => res.json());
    }
}