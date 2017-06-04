/*app.config(["AppName"  ,  "AppVersion" , function(AppName , AppVersion){
console.log("this is config :"+AppName)
console.log("this is config :"+AppVersion)
}])
*/
app.run(["AppName","AppVersion" , function(AppName ,AppVersion){
console.log("this is config :"+AppName)
console.log("this is config :"+AppVersion)
}])



app.service("CustomService" , function()
{
this.getCustomerDetails = function()
{
return " this will returns customers details..";
}
})

app.factory("CustomFactory" , function(){
	return "this is my factory ";
})

app.constant("AppName" , "angular services");
app.value("AppVersion" , "1.0.0");
