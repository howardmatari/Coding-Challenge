public with sharing class PaginatedAccountController {
    public Account account { get; private set; }

    public PaginatedAccountController() {
        // Get the account Id from the URL
        Id accountId = ApexPages.currentPage().getParameters().get('id');

        // Check if the account Id is not null
        //if (accountId != null) {
            // Query the Account record
            account = [SELECT Id, Name, Phone, Industry, BillingCity, BillingState FROM Account ];
       // } else {
            // If Id = null or invalid
           // account = new Account();
        //}
    }
}