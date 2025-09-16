import Name from '@salesforce/schema/Account.Name';
import { LightningElement } from 'lwc';

const DEFAULT_NOTE_FORM = {
    Name:"",
    Note_Description__c:""
}
export default class NoteTakingApp extends LightningElement {
    showModal = false;
    noteRecord = DEFAULT_NOTE_FORM;
    formats = [
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'list',
        'indent',
        'align',
        'link',
        'clean',
        'table',
        'header',
        'color',
    ];
    createNoteHandler(){
        this.showModal = true;
    }
    closeModalHandler(){
        this.showModal = false;
        this.noteRecord = DEFAULT_NOTE_FORM;
    }

    changeHandler(event){
        const { name, value } = event.target;
        this.noteRecord={...this.noteRecord, [name]:value};
    }
    formSubmitHandler(event){
        event.preventDefault();
        console.log("noteRecord: ", JSON.stringify(this.noteRecord));
    }

    get isFormInvalid(){
        return  !(this.noteRecord && this.noteRecord.Name !== "" && this.noteRecord.Note_Description__c === "");
    }
}
