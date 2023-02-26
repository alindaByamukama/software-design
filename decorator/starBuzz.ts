/**
 * Welcome to StarBuzz Cafe, can we take your order?
 * With the decorator pattern you will be able to give your objects new responsibilities without making ny code changes
 * start with a beverage and "decorate" it with condiments at runtime
 * Step 1: Start with a DarkRoast Object.
 * Step 2: Decorate it with a Mocha Object.
 * Step 3: Decorate it with a Whip Object.
 * Step 4: Call the cost() method and rely on delegation to add up the condiment costs.
 */

// beverage acts as our abstract component class - you can also use an interface
abstract class Beverage { 
    public description: string

    constructor(description: string) {
        this.description = description;
    }

    public getDescription(): string {
        return this.description
    }
    // because its abstract it must overridden in a subclass (java)
    abstract cost(): number;
    
}

// here is the reference to the beverage that the decorators will be wrapping
// note we are extending beverage here to have the correct type not to inherit behaviour
// the behavior comes via the composition of decorators with the base components and other decorators
abstract class CondimentDecorator extends Beverage {
    public beverage: Beverage;

    constructor(description: string, beverage: Beverage) {
        // we must call upon super - this is a reference to the parent class
        super(description);
        this.beverage = beverage;
    }

    public getDescription():string { 
        return this.description
    }
}

// these are our condiment decorators - they need to implement cost() and getDescription()
class Milk extends CondimentDecorator {
    cost():number { return 1.99 }
    public getDescription():string { 
        return this.description
    }
}
class Mocha extends CondimentDecorator {
    cost():number { return 1.99 }
    public getDescription():string { 
        return this.description
    }
}
class Soy extends CondimentDecorator {
    cost():number { return 1.99 }
    public getDescription():string { 
        return this.description
    }
}
class Whip extends CondimentDecorator {
    cost():number { return 1.99 }
    public getDescription():string { 
        return this.description
    }
}

// these are the four concrete components - one per coffee type
class HouseBlend extends Beverage {
    cost(){}
}
class DarkRoast extends Beverage {
    cost(){}
}
class Decaf extends Beverage {
    cost(){}
}
class Espresso extends Beverage {
    cost(){}
}