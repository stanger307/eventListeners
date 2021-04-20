const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!'
container.appendChild(content);

const para = document.createElement('p');
const head3 = document.createElement('h3');

const content2 = document.createElement('div');
content2.classList.add('content2');
content2.style = 'background-color: pink; border: 1px solid black';
const head1 = document.createElement('h1');
head1.textContent = 'I\'m in a div';
content2.appendChild(head1);
const para1 = document.createElement('p');
para1.textContent = 'ME TOO!';
content2.appendChild(para1);
container.appendChild(content2);

const btn = document.querySelector('#btn'); /* method2 */
btn.onclick = () => alert("Hello World");
const btn2 = document.querySelector('#btn2'); /* method3 */
btn2.addEventListener('click', () => { 
    alert('Hellow World')
});
btn.addEventListener('click', function (e){
    console.log(e.target);
});
btn.addEventListener('click', function (e) {
    e.target.style.background = 'yellow';
})