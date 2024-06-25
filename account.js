import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountNewController.getAccounts';

export default class Account extends LightningElement {
    @track Accounts;
    @track error;

    @wire(getAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.accounts = undefined;
        }
    }

    handleViewDetails(event) {
        const accountId = event.target.dataset.id;
        // Logic to handle viewing Account details
        console.log('View Account details:', accountId);
    }
}
