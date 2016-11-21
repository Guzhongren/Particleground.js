const emptyFn = function(){};
const isFunction = function(obj){
    return typeof obj === 'function';
};
const storer = {
    js: [],
    css: []
};

export function loadjs( url, callback, error ){
    if(storer.js.indexOf(url) !== -1){
        return isFunction(callback) && callback();
    }
    const script = document.createElement('script');
    script.onload = function(){
        storer.js.push(url);
        isFunction(callback) && callback();
    };
    script.onerror = error || emptyFn;
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild( script );
}

export function loadcss( url, callback, error ){
    if(storer.css.indexOf(url) !== -1){
        return isFunction(callback) && callback();
    }
    const link = document.createElement('link');
    link.onload = function(){
        storer.css.push(url);
        isFunction(callback) && callback();
    };
    link.onerror = error || emptyFn;
    link.href = url;
    link.rel = 'stylesheet';
    document.getElementsByTagName('head')[0].appendChild( link );
}

export function prettyPrint() {
    loadcss( '//cdn.bootcss.com/prettify/r298/prettify.min.css' );
    loadjs( '//cdn.bootcss.com/prettify/r298/prettify.min.js', () => {
        window.prettyPrint();
    });
}