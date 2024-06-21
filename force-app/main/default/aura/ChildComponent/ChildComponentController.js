({
	callParentMethod : function(component, event, helper) {
        //Call Parent aura method
        var parentComponent = component.get("v.parent");                         
		parentComponent.greetingMethod()
    }


    //({
        //handleClick : function(cmp, event) {
            //var attributeValue = cmp.get("v.text");
            //console.log("current text: " + attributeValue);
    
            //var target = event.getSource();
           // cmp.set("v.text", target.get("v.label"));
       // }
    //})
})