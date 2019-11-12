class map {
    constructor() {
        this.map = {};
        this.all = { timestamp: 0, allValue: undefined };

    }

    set(key, value) {
        this.map[key] = { value, timestamp: this.all.timestamp }
    }

    get(key) {
        if (this.map[key].timestamp < this.all.timestamp) return this.all.value;
        return this.map[key].value;
    }

    setAll(value) {
        this.all = { timestamp: ++this.all.timestamp, value };
    }
}

let mapIn = new map();
mapIn.set(1, 1);
mapIn.set(2, 2);
mapIn.set(3, 3);
console.log(mapIn.get(1));
mapIn.setAll(4);
console.log(mapIn.get(1));
console.log(mapIn.get(2));
mapIn.set(1, 1);
console.log(mapIn.get(1));
console.log(mapIn.get(2));


