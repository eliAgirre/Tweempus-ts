export class Author {

  private _id: string;
  private _url: string;
  private _fullname: string;
  private _image: string;

  constructor(id: string){
    this._id = id;
    this._url = '';
    this._fullname = 'Author';
    this._image = 'resources/images/google-icon.png';
  }

  get id(): string{
    return this._id;
  }

  get url(): string{
    return this._url;
  }

  get fullname(): string{
    return this._fullname;
  }

  get image(): string{
    return this._image;
  }

  set id(id: string){
    this._id = id;
  }

  set url(url: string){
    this._url = url;
  }

  set fullname(fullname: string){
    this._fullname = fullname;
  }

  set image(image: string){
    this._image = image;
  }
}
