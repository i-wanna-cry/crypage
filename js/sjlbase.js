/**
* Bind the object with handler
*/
function catchEvent (eventObj, event, eventHandler){
	if (eventObj.addEventListener)
	{
		eventObj.addEventListener(event,eventHandler, false);
	}else if (eventObj.attachEvent)
	{
		event = "on" + event;
		eventObj.attachEvent(event, eventHandler);
	}
}