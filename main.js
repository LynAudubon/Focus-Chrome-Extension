const content = document.getElementById('content');
const contentParent = content.parentNode;

console.log("contentParents",contentParent)
content.parentNode.removeChild(content);

const header = document.createElement('HEADER');
header.innerHTML = 'Get back to achieving your coding dreams';
header.classList.add('beautText');
contentParent.appendChild(header);

const image = document.createElement('img');
image.src = 'https://images.unsplash.com/photo-1533749047139-189de3cf06d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGltZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60';
contentParent.appendChild(image);
