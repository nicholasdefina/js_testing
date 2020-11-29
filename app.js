// w/o class/constructor
function ColorMaker(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}
ColorMaker.prototype.rgb = function() {
    const { r, g, b} = this;
        return `${r}, ${g}, ${b}`;
}
ColorMaker.prototype.hex = function() {
    const { r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
ColorMaker.prototype.rgba = function(a=1.0) {
    const { r, g, b} = this;
        return `${r}, ${g}, ${b}, ${a}`;
}

// with js classes and syntactical sugar
class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    rgb() {
        const { r, g, b} = this;
        return `${r}, ${g}, ${b}`;
    }
    hex() {
        const { r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    rgba(a=1.0) {
        const { r, g, b} = this;
        return `${r}, ${g}, ${b}, ${a}`;
    }
    addDescription(desc='no description provided') {
        // you can add new attributes that don't exist initially
        this.description = desc;
    }
}

const color = new Color(255, 255, 254, 'awesomeColor');