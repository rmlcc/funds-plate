function postMsg(url,params){
    $.post(url,params,function(data,status){
	console.log('status:' + status);
	console.log('data:' + data);
    });
}
