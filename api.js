export async function api(element) {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await res.json()
}

