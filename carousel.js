//folder name and start of file name of each image file
var startpath = 'pix3/birds';

// filename extension of each image.
var extension = '.png';

//show clicked image in the large img tag

//calculate which piture to show next based on x
//which is either 1 or -1
function calcslide(x) {
    //get file name of image that's showing.
    var currentimage = document.getElementById('bigpic').src;
    var path ='pix3/birds' + z + '.png';
    var z = '0' + x;
    var y = '' + 10;
    //locate file name extension in current image source string.
    var dotat = currentimage.indexOf(extension);
    //grab two digits to the left of that file name extension.
    var stringnumber = currentimage.substr(dotat -2, 2);
    //convert stringnumber string to number and add x.
    var nextnum = parseInt(stringnumber) + x;
    //if nextnum is less than 1, wrap around to maximages.
    if (nextnum < 1) {
        nextnum = maximages;
    }
    //if nextnum is greater than maximages, wrap around to 1.
    if (nextnum > maximages) {
        nextnum = 1;
    }
    //create two-digit string from number ( leading zero if less than 10).
    var twodigitnum = ('0' + nextnum).slice(-2);
    //create new file name from two-digit number string.
    var showimg = startpath + twodigit + extension;
    showbig(showimg) 
}

var maximages = 5;

// show clicked image in the large img tag
function showbig(pic) {
        document.getElementById('bigpic').src = pic;
}