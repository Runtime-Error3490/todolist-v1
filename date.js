exports.getDate=function ()
{
//() because we are not calling it will be called by app.js
let today=new Date();
let options={
    weekday:"long",
    day:"numeric",
    month:"long"
};
return today.toLocaleDateString("en-US",options);

}
exports.getDay=function ()
{
let today=new Date();
let options={
    weekday:"long",
};
return today.toLocaleDateString("en-US",options);

}
