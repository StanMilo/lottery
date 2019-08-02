export default function boardTemplate(startNum, endNum) {
    let HTML = '';
    for (let i = startNum; i <= endNum; i++) {
        HTML += `<div data-number="${i}" class="js-btn result-balls">${i}</div> `;
        document.getElementById('section-1').innerHTML = HTML;
    }
}
