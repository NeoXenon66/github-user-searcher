const btn=document.getElementById("search")
const url=`https://api.github.com/users/`
var value;
const searchGitHub=async()=> {
    value=document.getElementById("box").value
    const res=await fetch(`${url}${value}`)
    const json_data=await res.json()
    console.log(json_data);

    document.getElementById("content_title").innerHTML=""
    document.getElementById("main_content").innerHTML=""
    document.getElementById("content_buttons").innerHTML=""
    let div1=document.createElement("div")
    div1.id='div1'
    document.getElementById("content_title").appendChild(div1)
    let div2=document.createElement("div")
    div2.id='div2'
    document.getElementById("content_title").appendChild(div2)


if (json_data.message!="Not Found") {
	    const img=document.createElement("img")
	    img.src=json_data.avatar_url
	    document.getElementById("div1").appendChild(img)
	
	    const username=document.createElement("h2")
	    const name=document.createElement("h2")
	    username.innerHTML=json_data.login
	    name.innerHTML=json_data.name!=null?json_data.name:""
	    document.getElementById("div2").appendChild(name)
	    document.getElementById("div2").appendChild(username)
	
	    const joinyear=json_data.created_at.substring(0,4)
	    const numrepos=json_data.public_repos
	    const year=document.createElement("h3")
	    const repo=document.createElement("h3")
	    const loc=document.createElement("h3")
	    const bio=document.createElement("h3")
	    repo.innerHTML=`${numrepos} public repos`
	    year.innerHTML=`joined ${joinyear}`
	    loc.innerHTML=json_data.location
	    bio.innerHTML=json_data.bio
	    document.getElementById("main_content").appendChild(year)
	    document.getElementById("main_content").appendChild(repo)
	    document.getElementById("main_content").appendChild(loc)
	    document.getElementById("main_content").appendChild(bio)
	
	
	    const twitter_btn=document.createElement("button")
	    const blog_portfolio=document.createElement("button")
	    const Github=document.createElement("button")
	    twitter_btn.innerHTML="Twitter"
	    twitter_btn.onclick=()=>{
	      json_data.twitter_username!=null?parent.open(`https://twitter.com/${json_data.twitter_username}`):alert("They have no twitter")
	    }
	    Github.innerHTML="Github"
	    Github.onclick=()=>{
	      parent.open(`https://github.com/${json_data.login}`)
	    }
	    blog_portfolio.innerHTML="Blog/Portfolio"
	    blog_portfolio.onclick=()=>{
	      json_data.blog!="" && json_data.blog!=null?parent.open(`${json_data.blog}`):alert("They have no blog or portfolio")
	    }
	
	    Github.className="SMLinks"
	    twitter_btn.className="SMLinks"
	    blog_portfolio.className="SMLinks"
	
	    document.getElementById("content_buttons").appendChild(twitter_btn)
	    document.getElementById("content_buttons").appendChild(Github)
	    document.getElementById("content_buttons").appendChild(blog_portfolio)
} else {
	alert("User not found")
}


}
btn.addEventListener("click",searchGitHub)

//get user input ^
//append user input/username to the api https://api.github.com/users/(username)
//returns a data object containing usernames ,social media links etc



//example

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