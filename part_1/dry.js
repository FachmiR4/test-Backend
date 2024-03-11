// 1. implementasi metode DRY princeple didalam snippet kode berikut
//  DRY -> Do not Repeat Yourself

// make it dry

class Worker{
    constructor(hourWorked, rate){
        this.hourWorked = hourWorked;
        this.rate = rate;
        this.TAX = 20;
    }
    basicSalary(){
        return this.hourWorked * this.rate;
    }
    overviewSalray(){
        return this.basicSalary() + this.TAX;
    }
}

const fachmi = new Worker(40,10);
console.log(fachmi.overviewSalray());