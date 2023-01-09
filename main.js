import './style.css'
import { api } from './api.js'


async function createPosts() {
	let posts = await api();
	let range = document.getElementById('range')
	let submit = document.getElementById('submit')

	posts.length = range.value
	
	posts.forEach((post, index) => {
		let mainDiv = document.createElement('div')
		mainDiv.className = 'blog_post'
		
		let h2 = document.createElement('h2')
		let h2Text = document.createTextNode(post.title)
		h2.className = 'title'
		h2.appendChild(h2Text)
		
		let p = document.createElement('p')
		let pText = document.createTextNode(post.body)
		p.className = 'text'
		p.appendChild(pText)
	
		mainDiv.appendChild(h2)
		mainDiv.appendChild(p)
	
		document.getElementById('app').appendChild(mainDiv)
	});

}

createPosts() 


