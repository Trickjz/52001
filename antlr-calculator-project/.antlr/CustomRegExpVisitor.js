const RegExpVisitor = require('./generated/RegExpVisitor').RegExpVisitor;

class CustomRegExpVisitor extends RegExpVisitor {
    visitProg(ctx) {
        console.log("¡Expresión válida!");
        return null;
    }
}

module.exports = CustomRegExpVisitor;
