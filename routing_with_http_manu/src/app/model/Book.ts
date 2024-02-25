export class Book 
{

    constructor(private _id: number=0,private _bkname: string='',private _bkprice: number=0)
    {
        
    }

    public toString():string
    {
        // return "Book--> id: "+this._id+", bkname: "+this._bkname+", bkprice: "+this._bkprice;
        return "Book-> Id: "+this._id+",  Name: "+this._bkname+",  Price: "+this._bkprice;
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
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    
}