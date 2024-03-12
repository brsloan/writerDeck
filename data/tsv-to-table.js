//Node script for convering .tsv file to markdown table
const fs = require('fs');

fs.readFile('DIY_writerdecks.tsv', 'utf8', function(err, data){
    var writerDecks = parseFile(data);
    var tableStr = toMarkdownTable(writerDecks);
    console.log(tableStr);
    writeResult(tableStr);
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
    var tableStr = '| Date | Name | Details | Image |\n';
    tableStr += '| ---- | ---- | ---- | ---- |\n';

    decks.forEach(deck => {
        tableStr += '| ' + deck.Date + ' | [' + deck.Name + '](' + 
        deck.Link + ') by ' + deck.Creator + ' | ' + 'Hardware: ' + 
        deck.Hardware + '; Software: ' + (deck.Software ? deck.Software : '???') + '; Case: ' + 
        deck.Case + ' | ![photo of a writing device](/images/diy/' + 
        deck.Image + ') |\n';
    });

    return tableStr;
}

function writeResult(tableStr){
    fs.writeFile('DIY_writerdecks.md', tableStr, function(){
        console.log('file saved to DIY_writerdecks.md');
    });
}