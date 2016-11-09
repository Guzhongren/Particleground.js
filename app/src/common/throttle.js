export default ( fn, delay, must ) => {
    if( !delay && !must ){
        return fn;
    }
    var startTime = new Date(),
        timer;
    return function( e ){
        var context = this;
        if( delay ){
            clearTimeout( timer );
            timer = setTimeout(function(){
                fn.call( context, e );
            }, delay );
        }else if( new Date() - startTime > must ){
            startTime = new Date();
            fn.call( context, e );
        }
    }
}