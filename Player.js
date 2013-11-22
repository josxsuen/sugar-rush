function Node(obj) {
	this.val = obj;
	this.next = {};
}

function LinkedList() {
	this.head = {};
	val cur, add;
	
	this.addNode = function(obj) {
		if (this.head == {})
			this.head = new Node(obj);
		else {
			cur = head;
			while (cur.next != {})
				cur = cur.next;
			add = new Node(obj);
			cur.next = add;
		}
	}

	this.removeHead = function() {
		if (this.head != {})
			this.head = this.head.next;
	}
}

function HashTable(obj) {
    this.length = 0;
    this.items = {};
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            this.items[p] = obj[p];
            this.length++;
        }
    }

    this.setItem = function(key, value)
    {
        var previous = undefined;
        if (this.hasItem(key)) {
            previous = this.items[key];
        }
        else {
            this.length++;
        }
        this.items[key] = value;
        return previous;
    }

    this.getItem = function(key) {
        return this.hasItem(key) ? this.items[key] : undefined;
    }

    this.hasItem = function(key)
    {
        return this.items.hasOwnProperty(key);
    }
   
    this.removeItem = function(key)
    {
        if (this.hasItem(key)) {
            previous = this.items[key];
            this.length--;
            delete this.items[key];
            return previous;
        }
        else {
            return undefined;
        }
    }

    this.keys = function()
    {
        var keys = [];
        for (var k in this.items) {
            if (this.hasItem(k)) {
                keys.push(k);
            }
        }
        return keys;
    }

    this.values = function()
    {
        var values = [];
        for (var k in this.items) {
            if (this.hasItem(k)) {
                values.push(this.items[k]);
            }
        }
        return values;
    }

    this.each = function(fn) {
        for (var k in this.items) {
            if (this.hasItem(k)) {
                fn(k, this.items[k]);
            }
        }
    }

    this.clear = function()
    {
        this.items = {}
        this.length = 0;
    }
}

Player = Class.create({
	initialize: function() {
		var money = 0;
		var health = 100;
		var ingredients = new HashTable({});
	},

	purchaseItem: function(cost) {
		this.money -= cost;
	}

	addIngredient: function(key, toAdd) {
		val addIngr = new Node(toAdd);
		val linked;

		if ingredients.hasItem(key) 
			linked = ingredients.getItem(key);
		else
			linked = new LinkedList();
			
		linked.addNode(addIngr);
		ingredients.setItem(key, linked);
	}
});