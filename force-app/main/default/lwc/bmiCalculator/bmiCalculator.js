import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    height = ''
    weight = ''
    bmiValue = ''
    result = ''
    handleChange(event) {
        const { name, value } = event.target;
        if (name === "height") {
            this.height = value;
        } else if (name === "weight") {
            this.weight = value;
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log("height: ", this.height, "weight: ", this.weight);
        this.calculateBMI();
    }

    calculateBMI(){
        let height = Number(this.height)/100; // convert cm to m
        let bmi = Number(this.weight) / (height * height);

        this.bmiValue = Number(bmi.toFixed(2));
        if(this.bmiValue < 18.5){
            this.result = 'Underweight';
        }else if(this.bmiValue >= 18.5 && this.bmiValue <= 24.9){
            this.result = 'Healthy';
        }else if(this.bmiValue >= 25 && this.bmiValue <= 29.9){
            this.result = 'Overweight';
        }else{
            this.result = 'Obese';
        }
        console.log("bmi: ", this.bmiValue);
        console.log("result: ", this.result);
        return this.result;
    }
    recalculate(){
        this.height = '';
        this.weight = '';
        this.bmiValue = '';
        this.result = '';
    }
}
