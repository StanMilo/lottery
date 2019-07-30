import { DealComponent } from './components/deal-component';

class Game {
    constructor() {
        this.startNum = 1;
        this.endNum = 30;
        this.selectedNum = [];
        this.ticketList = [];
        this.winArray = [];
        this.maxTicketsNum = 4;
        this.maxNumsPlayed = 5;
    }

    addBtnClick() {
        let buttons = document.getElementsByClassName('btn-sec1');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].onclick = this.clickBtnHandler.bind(this);
        }
    }

    addTicketHandler() {
        if (this.hasReachedTicketMaxNum()) {
            return;
        }
        this.ticketList.push(this.selectedNum);
        this.resetTicket();
    }

    addPlayHandler() {
        new DealComponent().start(this.checkForWinTicket.bind(this));
    }

    checkForWinTicket(winNums) {
        this.ticketList.forEach((ticket, key) => {
            let isWining = this.isWiningTicket(ticket, winNums);
            let status = isWining ? 'win' : 'lose';
            document.getElementsByClassName('ticket-row')[key].classList.add(status);
        });
    }

    isWiningTicket(ticket, winNums) {
        return ticket.every((value) => winNums.indexOf(parseInt(value)) > -1);
    }

    clickBtnHandler(event) {
        if (this.selectedNum.length >= this.maxNumsPlayed) {
            return;
        }
        let element = event.currentTarget;
        let numValue = element.dataset.number;
        element.style.backgroundColor = 'red';
        this.selectedNum.push(numValue);
        console.log(this.selectedNum);
    }

    hasReachedTicketMaxNum() {
        return this.ticketList.length > this.maxTicketsNum;
    }

    renderBoard() {
        let HTML = '';
        for (let i = this.startNum; i <= this.endNum; i++) {
            HTML += `<div type="button" data-number="${i}" class="btn btn-sec1">${i}</div> `;
            document.getElementById('section-1').innerHTML = HTML;
        }
    }

    renderTicketList() {
        let HTML = '';
        this.ticketList.forEach((ticket) => {
            HTML += `<tr class="ticket-row">`;
            ticket.forEach((number) => {
                HTML += `<th><span class="ball">${number}</span></th>`;
            });
            HTML += `</tr>`;
        });
        document.getElementById('tbody').innerHTML = HTML;
    }

    resetTicket() {
        if (this.hasReachedTicketMaxNum()) {
            document.getElementById('play').style.display = 'inline';
            document.getElementById('add-ticket').style.display = 'none';
        }
        this.selectedNum = [];
        this.renderBoard();
        this.addBtnClick();
        this.renderTicketList();
    }

    startGame() {
        this.renderBoard();
        this.addBtnClick();
        document.getElementById('play').onclick = this.addPlayHandler.bind(this);
        document.getElementById('add-ticket').onclick = this.addTicketHandler.bind(this);
    }
}

new Game().startGame();
