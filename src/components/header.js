
const header = () => {
    let img = 'assets/images/js.svg';

    const headerEl = document.querySelector('.box');

    const headerHtml = `
        <div class="headerBlock"><img src=${img}></div>
    `;
    headerEl.insertAdjacentHTML('afterbegin', headerHtml);
}
export default header;