const container = document.querySelector('#container');

const content = document.createElement('p');
content.classList.add('content');
content.style.color = "red";
content.textContent = 'Hey I\'m red!';

const blueH3 = document.createElement('h3');
blueH3.classList.add("blueH3");
blueH3.style.color = "blue";
blueH3.textContent = "I'm a blue h3!"

const secondDiv = document.createElement('div');
secondDiv.classList.add("blueH3");
// secondDiv.setAttribute("style", "border: 1px black; background-color: black");
secondDiv.style.cssText = "border: solid; background-color: pink;"

const inDiv = document.createElement('h1');
inDiv.textContent = "I'm in a div";

const pInDiv = document.createElement('p');
pInDiv. textContent = "ME TOO!";


container.appendChild(content);
container.appendChild(blueH3);
container.appendChild(secondDiv);

secondDiv.appendChild(inDiv);
secondDiv.appendChild(pInDiv);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
