class Processor{
     
    static Process(data){
        var td = data.split("\r\n");
        var rows = [];

        td.forEach(row =>{
            var arr = row.split(",");
            rows.push(arr);
        })
        return(rows)
    }

}

module.exports = Processor;