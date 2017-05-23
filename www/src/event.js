class Event {
    constructor(sender){
        this._sender = sender;
        this._listeners = [];
    }
    attach(listener) {
        this._listeners.push(listener);
    }
    notify(args) {
        let index;
        for (index = 0; index < this._listeners.length; index += 1) {
            this._listeners[index](this._sender, args);
        }
    }
}
