function loadjs( url, callback, error ){
    const script = document.createElement('script');
    script.onload = callback || function(){};
    script.onerror = error || function(){};
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild( script );
}

function loadcss( url, callback, error ){
    const link = document.createElement('link');
    link.onload = callback || function(){};
    link.onerror = error || function(){};
    link.href = url;
    link.rel = 'stylesheet';
    document.getElementsByTagName('head')[0].appendChild( link );
}

export {
    loadjs,
    loadcss
}