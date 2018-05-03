// interface Password {
//     service: string;
//     username: string;
//     password: string;
//     $key?: string;
// }
/**
 * Generic class that gives classes that extend it a key
 */
export class FirebaseFlatSnapshot {
    public $key: string;
    constructor (obj?: any){
        if(obj && obj.$key){
            this.$key = obj.$key;
        }
    }
}

export class Password extends FirebaseFlatSnapshot{
    public service: string;
    public username: string;
    public password: string;

    constructor(obj?: any) {
        //only get single constructor in javascript, with some poor workarounds
        super();
        // This will set it to the object value
        this.service = obj && obj.service || "";
        this.username = obj && obj.username || "";
        this.password = obj && obj.password || "";
        
    }

}