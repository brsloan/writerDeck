//Node script for converting .tsv file to markdown table
const fs = require('fs');

fs.readFile('DIY_writerdecks.tsv', 'utf8', function(err, data){
    var writerDecks = parseFile(data);
    var tableStr = toMarkdownTableDetailed(writerDecks);
    writeResult('DIY_writerdecks.md', tableStr);
    var mobileStr = toMarkdownMobile(writerDecks);
    writeResult('DIY_writerdecks_mobile.md', mobileStr);

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

function toMarkdownTableSimple(decks){
    var tableStr = '| Date | Name | Image |\n';
    tableStr += '| ---- | ---- | ---- |\n';

    decks.forEach(deck => {
        tableStr += '| ' + deck.Date + ' | [' + deck.Name + '](' + 
        deck.Link + ') by ' + deck.Creator + ' | [<img src="images/diy/' + deck.Image + '">](/images/diy/' + 
        deck.Image + ') |\n';
    });

    return tableStr;
}

function toMarkdownTableDetailed(decks){
    var tableStr = '| Date | Name | Details | Image |\n';
    tableStr += '| ---- | ---- | ---- | ---- |\n';

    decks.forEach(deck => {
        tableStr += '| ' + deck.Date + ' | [' + deck.Name + '](' + 
        deck.Link + ') by ' + deck.Creator + ' | ' + 'Hardware: ' + 
        deck.Hardware + '; Software: ' + (deck.Software ? deck.Software : '???') + '; Case: ' + 
        deck.Case + ' | [<img src="images/diy/' + deck.Image + '">](/images/diy/' + 
        deck.Image + ') |\n';
    });

    return tableStr;
}

function toMarkdownMobile(decks){
    var mobileStr = '# DIY Writer Decks (Mobile Friendly)\n';

    decks.forEach(deck => {
        mobileStr += '## ' + deck.Date + ': [' + deck.Name + '](' + 
        deck.Link + ') by ' + deck.Creator + '\n';
        mobileStr += '* Hardware: ' + 
        deck.Hardware + '\n* Software: ' + (deck.Software ? deck.Software : '???') + '\n* Case: ' + 
        deck.Case + '\n\n';
        mobileStr += '[<img src="images/diy/' + deck.Image + '">](/images/diy/' + 
        deck.Image + ')\n\n';
    })

    return mobileStr;
}

function writeResult(name, tableStr){
    fs.writeFile(name, tableStr, function(){
        console.log('file saved to: ' + name);
    });
}