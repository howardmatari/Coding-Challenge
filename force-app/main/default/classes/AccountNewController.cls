public without sharing class AccountNewController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [SELECT Id, Name, Rating, Industry, AnnualRevenue, Active__c FROM Account];
    }
       
}