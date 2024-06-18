# Coding-Challenge 6/17/2024
Coding Practice for Salesforce 

Challenge: 
Create batchable apex that will delete stale Account records. Stale account records are Accounts with no related open opportunities for the last 6 months. 

SOQL query used to get stale accounts according to criteria:  
 ([SELECT Id FROM Account WHERE Id NOT IN (SELECT AccountId FROM Opportunity WHERE IsClosed = FALSE AND CloseDate > LAST_N_MONTHS:6)]);
 
Create schedulable apex that will execute the batch class above. 
 
Schedule your schedulable apex to run at 12 am at the first of every month. Take a screenshot of your scheduled job from within the setup menu and include it in the repo 

Resources used for Challenge:

https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm

https://github.com/sconnock/sc-trailheadlive/blob/master/Asynchronous%20Apex%20Module/Unit%203%20Batch/LeadProcessor.txt

https://trailhead.salesforce.com/content/learn/modules/asynchronous_apex/async_apex_batch
