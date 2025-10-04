//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function removeArticle(word) {
    let x = word.split(" ")
    // console.log(x)
    if (x[0].toLowerCase() == 'a' || x[0].toLowerCase() == 'an' || x[0].toLowerCase() == 'the') {
        x.shift()
    }
    return x.join(" ")
}


bands.sort((a, b) => {
    return removeArticle(a).localeCompare(removeArticle(b))
})


let ul= document.createElement('ul')
ul.setAttribute('id','bands')

bands.forEach((word)=>{
	let li= document.createElement('li')
	li.textContent = word;
	ul.appendChild(li)
})
document.body.appendChild(ul)