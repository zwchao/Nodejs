var http =require ('http'),
    url = ['baidu.com','taobao.com','qq.com'];

    function fetch(url){
        var start = new Date();
        http.get({host:url},function(res){
            console.log("Got response from"+url);
            console.log('Request took:' ,new Date()-start,'ms');
        });
    }

    for(var i=0;i<url.length;i++){
        fetch(url[i]);
    }
