vlocity.cardframework.registerModule.controller('SGActionsController', ['$scope', function($scope){
    
    $scope.getDisplayActionsBasedonProfile = function(obj, actionId) {
       
        if(!obj.hasOwnProperty('LoggedInUserProfile__c')) {
            return true;
        }else{
            var profileValue = obj['LoggedInUserProfile__c'];
            var physicalState = obj['Company_State__c'];
            var returnValue = true;
			if(actionId == 'custom-enrollment' && physicalState != 'NY')
                returnValue = false;
            if(actionId == 'Create Census Members' && physicalState == 'NY')
                returnValue = false;
            if(actionId == 'Custom-CACO-Enroll' && physicalState == 'NY')
                returnValue = false;
            if(actionId == 'Custom-IN_KY_OH-Enroll' && (physicalState != 'OH' && physicalState != 'IN' && physicalState != 'KY'))
                returnValue = false;
            if(actionId == 'Custom-GA_VA_MO-Enroll' && (physicalState != 'GA' && physicalState != 'VA' && physicalState != 'MO'))
                returnValue = false;
            if(actionId == 'Custom-CT_NH_ME -Enroll' && (physicalState != 'CT' && physicalState != 'NH' && physicalState != 'ME'))
                returnValue = false;
            if(actionId == 'Custom-WI_NV-Enroll' && (physicalState != 'WI' && physicalState != 'NV'))
                returnValue = false;
            return returnValue;
        }
    };
    
}]);