import './style.css'
import { api } from './api.js'


let con = document.querySelector('.con')
async function createPosts() {
	let range = document.getElementById('range')
	let range_text = document.querySelector('.range_text')
	
	onload = async () => {
		let posts = await api();
		range.value = range.min
		range_text.innerHTML = `you're seeing now ${range.value} posts`
		posts.length = range.value
		posts.forEach((post) => {
			createUi(post)
		});
	}
	range.addEventListener('input', async () => {
		let posts = await api();
		
		range_text.innerHTML = `you're seeing now ${range.value} posts`

		// removing the old data in the Ui before showing the new data 
		con.innerHTML = ""

		posts.length = range.value
		posts.forEach((post) => {
			createUi(post)
		});
	})
}

createPosts() 


function createUi(post) {
	let mainDiv = document.createElement('div')
	mainDiv.className = `blog_post`
	
	let h2 = document.createElement('h2')
	let h2Text = document.createTextNode(`${post.title + " " + post.id}`)
	h2.className = 'title'
	h2.appendChild(h2Text)
	
	let p = document.createElement('p')
	let pText = document.createTextNode(post.body)
	p.className = 'text'
	p.appendChild(pText)

	mainDiv.appendChild(h2)
	mainDiv.appendChild(p)

	document.querySelector(".con").appendChild(mainDiv)
}

// create new post feature
let create_post = document.querySelector('.create_post')
let post_title = document.getElementById('post_title')
let user_id = document.getElementById('user_id')
let post_text = document.getElementById('post_text')
let post_text_btn = document.getElementById('post_text-btn')

let popUp = document.querySelector('.popUp')

create_post.onclick = () => {
	let wrong = document.querySelector('.wrong');
	if (create_post.innerHTML === 'Create') {
		create_post.innerHTML = 'Close'
	}else {
		create_post.innerHTML = 'Create'
	}
	popUp.classList.toggle("disabled");	
	con.classList.toggle('blur')
	wrong.innerHTML = ''

	// post_text_btn.onclick = () => {
	// 	create_post.innerHTML = 'Create'
	// 	popUp.classList.toggle("disabled");	
	// 	con.classList.toggle('blur')
	// }
}

post_text_btn.onclick = () => {
	if (post_title.value === '' || user_id.value === '' || post_text.value === '') {
		let wrong = document.querySelector('.wrong');
		wrong.innerHTML = 'please fill all fields';
	}else {
		let new_post = {
			id: user_id.value,
			title: post_title.value,
			body: post_text.value,
		}
		createNewPost(new_post)
	
		create_post.innerHTML = 'Create'
		popUp.classList.toggle("disabled");	
		con.classList.toggle('blur')
	
		post_title.value = '';
		user_id.value = '';
		post_text.value = '';
	}
}


function createNewPost(post) {
	let mainDiv = document.createElement('div')
	mainDiv.className = `blog_post`
	
	let h2 = document.createElement('h2')
	let h2Text = document.createTextNode(`${post.title + " " + post.id}`)
	h2.className = 'title'
	h2.appendChild(h2Text)
	
	let p = document.createElement('p')
	let pText = document.createTextNode(post.body)
	p.className = 'text'
	p.appendChild(pText)

	mainDiv.appendChild(h2)
	mainDiv.appendChild(p)

	document.querySelector(".con").prepend(mainDiv)
}




