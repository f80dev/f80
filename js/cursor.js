var handle;
var author=null;

var TxtRotate = function(el, toRotate, period) {
    clearTimeout(handle);
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i].text;

    var offset=0;

    if (this.isDeleting) {
        if(fullTxt.charCodeAt(this.txt.length-1)>40000)offset=1;
        this.txt = fullTxt.substring(0, this.txt.length - 1-offset);
    } else {
        if(fullTxt.charCodeAt(this.txt.length)>40000)offset=1;
        this.txt = fullTxt.substring(0, this.txt.length + 1+offset);
    }

    this.el.innerHTML = '<span style="border-right: 0.09em solid white;">'+this.txt+'</span>';

    var that = this;
    var delta = 150 - Math.random() * 120;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 1000;
    }

    handle=setTimeout(function() {
        that.tick();
    }, delta);
};


