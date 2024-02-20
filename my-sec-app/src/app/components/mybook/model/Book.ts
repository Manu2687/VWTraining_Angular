export class Book 
{
    
    // private _bkid: number;
    // private _bkname: string;
    // private _bkprice: number;
    // constructor(private _bkid:number, _bkname:string='Learn Angular', _bkprice:number=2000)
    // {
    //     this._bkid=_bkid;
    //     this._bkname=_bkname;
    //     this._bkprice=_bkprice;
    // }

    constructor(private _bkid: number=0,private _bkname: string='',private _bkprice: number=0)
    {
        
    }

    public toString():string
    {
        // return "Book--> bkid: "+this._bkid+", bkname: "+this._bkname+", bkprice: "+this._bkprice;
        return "Book-> Id: "+this._bkid+",  Name: "+this._bkname+",  Price: "+this._bkprice;
    }


    public get bkprice(): number {
        return this._bkprice;
    }
    public set bkprice(value: number) {
        this._bkprice = value;
    }
    public get bkname(): string {
        return this._bkname;
    }
    public set bkname(value: string) {
        this._bkname = value;
    }
    public get bkid(): number {
        return this._bkid;
    }
    public set bkid(value: number) {
        this._bkid = value;
    }

    
}