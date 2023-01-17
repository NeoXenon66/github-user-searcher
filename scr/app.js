const btn=document.getElementById("search")
const url=`https://api.github.com/users/`
var value;
const searchGitHub=async()=> {
    value=document.getElementById("box").value
    const res=await fetch(`${url}${value}`)
    const json_data=await res.json()
    console.log(json_data);
    const img=document.createElement("img")
    img.src=json_data.avatar_url
    document.getElementById("content_title").appendChild(img)
    const username=document.createElement("h1")
    username.innerHTML=json_data.login
    document.getElementById("content_title").appendChild(username)
}
btn.addEventListener("click",searchGitHub)

//get user input ^
//append user input/username to the api https://api.github.com/users/(username)
//returns a data object containing usernames ,social media links etc
/*
{
  "login": "Alamin-Juma",
  "id": 61662333,
  "node_id": "MDQ6VXNlcjYxNjYyMzMz",
  "avatar_url": "https://avatars.githubusercontent.com/u/61662333?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Alamin-Juma",
  "html_url": "https://github.com/Alamin-Juma",
  "followers_url": "https://api.github.com/users/Alamin-Juma/followers",
  "following_url": "https://api.github.com/users/Alamin-Juma/following{/other_user}",
  "gists_url": "https://api.github.com/users/Alamin-Juma/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Alamin-Juma/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Alamin-Juma/subscriptions",
  "organizations_url": "https://api.github.com/users/Alamin-Juma/orgs",
  "repos_url": "https://api.github.com/users/Alamin-Juma/repos",
  "events_url": "https://api.github.com/users/Alamin-Juma/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Alamin-Juma/received_events",
  "type": "User",
  "site_admin": false,
  "name": "ALAMIN JUMA MAGOTI",
  "company": "UTAS UNIVERSITY",
  "blog": "https://sites.google.com/view/alaminjuma/home?authuser=0",
  "location": "Mombasa, Kenya",
  "email": null,
  "hireable": true,
  "bio": "\"Give me six hours to chop down a tree and I will spend the first four sharpening the axe.” - Abraham Lincoln:\"",
  "twitter_username": "254Alamin",
  "public_repos": 34,
  "public_gists": 1,
  "followers": 6,
  "following": 11,
  "created_at": "2020-03-01T17:40:40Z",
  "updated_at": "2022-12-27T13:27:24Z"
}
*/