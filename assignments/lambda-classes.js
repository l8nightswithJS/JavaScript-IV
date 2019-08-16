// CODE here for your Lambda Classes
class GameObject {
    constructor(attrs) {
        this.createdAt = attrs.createdAt;
        this.name = attrs.name;
        this.dimensions = attrs.dimensions;
    };
    destroy = function() {
        return (`${this.name} was removed from the game.`);
        };
}

class CharacterStats extends GameObject {
    constructor(attrs) {
        super(attrs);
        this.healthPoints = attrs.healthPoints;
    };
        takeDamage = function() {
        return `${this.name} took damage.`
        }
}

class Humanoid extends CharacterStats {
    constructor(attrs) {
        super(attrs);    
        this.team = attrs.team;
        this.weapons = attrs.weapons;
        this.language = attrs.language;
    };
        greet = function() {
        return `${this.name} offers a greeting in ${this.language}`;
        };
        
}
