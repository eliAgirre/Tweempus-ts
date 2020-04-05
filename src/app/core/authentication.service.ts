import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AuthorService } from '../shared/author/author.service';

import { Author } from '../shared/author/author.model';
import { Token } from './token.model';

@Injectable()
export class AuthenticationService {

  private url: string = 'http://localhost:3000/authenticated';

  token: Token = null;

  constructor(
    private httpClient: HttpClient,
    private authorService: AuthorService
  ) { }

}
