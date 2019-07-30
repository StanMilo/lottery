export class DealComponent {
    constructor() {
        this.drawedNums = [];
        this.count = 12;
    }
    start(callback) {
        this.onFinish = callback;
        this.makeNumbers();
        this.render();
        return this;
    }

    generateRandomNum() {
        let num = Math.round(Math.random() * (30 - 1) + 1);
        if (this.drawedNums.indexOf(num) < 0) {
            return num;
        }
        return this.generateRandomNum();
    }

    makeNumbers() {
        for (let i = 0; i < this.count; i++) {
            let genNum = this.generateRandomNum();
            this.drawedNums.push(genNum);
        }
        console.log(this.drawedNums, 'array result');
    }
    render() {
        for (let i = 0; i < this.drawedNums.length; i++) {
            setTimeout(() => {
                let HTML = `<div 
                button type="button" class="btn btn-outline-primary btn-circle active" role="button" aria-pressed="true"
                >${this.drawedNums[i]}</div>`;
                document.getElementById('sec-3').innerHTML += HTML;
                if (i == this.drawedNums.length - 1) {
                    this.onFinish(this.drawedNums);
                }
            }, i * 500);
        }
    }
}
