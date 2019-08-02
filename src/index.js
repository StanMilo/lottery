import { DealComponent } from './components/deal-component';
import ticketListTemplate from './components/ticket-list-template';
import boardTemplate from './components/board-template';

const PlaySelector = 'js-play';
const AddTicketSelector = 'js-add-ticket';
const TicketRowSelector = 'js-ticket-row';
const BtnNumSelector = 'js-btn';

class Game {
    constructor() {
        this.init();
    }

    addBtnClick() {
        let buttons = document.getElementsByClassName(BtnNumSelector);
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].onclick = this.handleBtnClick.bind(this);
        }
    }

    onFinish(winNums) {
        this.ticketList.forEach((ticket, key) => {
            let isWining = this.isWiningTicket(ticket, winNums);
            let status = isWining ? 'win' : 'lose';
            document.getElementsByClassName(TicketRowSelector)[key].classList.add(status);
        });
        // resets game after 5 seconds
        setTimeout(this.resetGame.bind(this), 5000);
    }

    handlePlayClick() {
        if (this.playDisabled) {
            return;
        }
        new DealComponent().start(this.onFinish.bind(this));
        this.playDisabled = true;
    }

    handleTicketClick() {
        if (this.hasReachedTicketMaxNum() || this.selectedNum.length == 0) {
            return;
        }
        this.ticketList.push(this.selectedNum);
        this.resetTicket();
    }

    handleBtnClick(event) {
        if (this.selectedNum.length >= this.maxNumsPlayed) {
            return;
        }
        let element = event.currentTarget;
        let numValue = element.dataset.number;
        element.style.backgroundColor = '#247cea';
        this.selectedNum.push(numValue);
    }

    hasReachedTicketMaxNum() {
        return this.ticketList.length > this.maxTicketsNum;
    }

    init() {
        this.startNum = 1;
        this.endNum = 30;
        this.selectedNum = [];
        this.ticketList = [];
        this.winArray = [];
        this.maxTicketsNum = 4;
        this.maxNumsPlayed = 5;
        this.playDisabled = false;
    }

    isWiningTicket(ticket, winNums) {
        return ticket.every((value) => winNums.indexOf(parseInt(value)) > -1);
    }

    resetGame() {
        this.init();
        document.getElementById(PlaySelector).style.display = 'none';
        document.getElementById(AddTicketSelector).style.display = 'inline';
        document.getElementById('tbody').innerHTML = '';
        document.getElementById('sec-3').innerHTML = '';
    }

    resetTicket() {
        if (this.hasReachedTicketMaxNum()) {
            document.getElementById(PlaySelector).style.display = 'inline';
            document.getElementById(AddTicketSelector).style.display = 'none';
        }
        this.selectedNum = [];
        boardTemplate(this.startNum, this.endNum);
        this.addBtnClick();
        ticketListTemplate(this.ticketList);
    }

    startGame() {
        boardTemplate(this.startNum, this.endNum);
        this.addBtnClick();
        document.getElementById(PlaySelector).onclick = this.handlePlayClick.bind(this);
        document.getElementById(AddTicketSelector).onclick = this.handleTicketClick.bind(this);
    }
}

new Game().startGame();
