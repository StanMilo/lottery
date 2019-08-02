export default function ticketListTemplate(ticketList) {
    let HTML = '';
    ticketList.forEach((ticket) => {
        HTML += `<tr class="js-ticket-row">`;
        ticket.forEach((number) => {
            HTML += `<th><span class="ball result-balls btn-circle">${number}</span></th>`;
        });
        HTML += `</tr>`;
    });
    document.getElementById('tbody').innerHTML = HTML;
}
