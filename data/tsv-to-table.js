//Node script for convering .tsv file to markdown table
const fs = require('fs');

fs.readFile('DIY_writerdecks.tsv', 'utf8', function(err, data){
    var writerDecks = parseFile(data);
    var tableStr = toMarkdownTable(writerDecks);
    console.log(tableStr);
});

function parseFile(data){
    var writerDecks = [];
    const windowsSplit = '\r\n';
    const unixSplit = '\n';
    var lines = data.split(windowsSplit);

    var titleLine = lines.shift().split('\t');    

    lines.forEach(line => {
        var cells = line.split('\t');
        var deck = {};
        cells.forEach(function(cell, i, arr){
            deck[titleLine[i]] = cell;
        });
        writerDecks.push(deck);
    });

    return writerDecks;
}

function toMarkdownTable(decks){
    var tableStr = '| Date | Name | Image |\n';
    tableStr += '| ---- | ---- | ---- |\n';

    decks.forEach(deck => {
        tableStr += '| ' + deck.Date + ' | ' + deck.Name + ' by ' + deck.Creator + ' | ![photo of a writing device](/images/diy/' + deck.Image + ') |\n';
    });

    return tableStr;
}