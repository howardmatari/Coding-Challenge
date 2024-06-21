public with sharing class AccountController {
    public Account account { get; private set; }

    public AccountController() {
        // Get the account Id from the URL
        Id accountId = ApexPages.currentPage().getParameters().get('id');

        // Check if the account Id is not null
        if (accountId != null) {
            // Query the Account record
            account = [SELECT Id, Name, Phone, Industry, BillingCity, BillingState FROM Account WHERE Id = :accountId LIMIT 1];
        } else {
            // If Id = null or invalid
            account = new Account();
        }
    }
}
