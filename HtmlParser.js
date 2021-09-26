var ejs = require("ejs");
const Table = require("./Table");

class HtmlParser{

     static async Parse(table){
       return await ejs.renderFile("./table.ejs", {header: table.header, rows: table.rows})
    }

}

module.exports = HtmlParser;