let title,speed,counter,anim_title,max,reverse = false,boost = false,timing,change = false,anim_title2,pause = false,
youtube_api_key_V3,youtube_channel_id,youtubeuser = {},github_username;

let anim = function() {

    let new_title = '';

    if(reverse){
        boost = true
    }

    if(!reverse || (reverse && counter === 1)){
        boost = false;
    }

    if(change && reverse && counter === 1)
        change = false
    

    else if(reverse && counter === 1){
        change = true
    }
   

    max = (change ? anim_title2.length : anim_title.length);


    if(boost) {
       speed *= 0.8;
    }else{
        speed = 350;
    }

    

    for(let i = 0;i<counter;i++){
        new_title += (change ? anim_title2[i] : anim_title[i]);
    } 

    new_title = counter ===0 ? (change ? anim_title2[0] : anim_title[0]) :new_title
    title.innerHTML = new_title; 

    if(counter < max && !reverse)counter++;
    else reverse =  true;

    if(reverse){
        counter--;
        if(counter === 0) reverse= false;
    };
    if(!pause)
    setTimeout(anim,speed);
};

(()=>{
window.addEventListener('load',() =>{
    anim_title = [...'theking90000.be'],
    anim_title2 = [...'theking90000_#0239']
    title = document.querySelector('.title_anim'),
    max = anim_title.length,
    speed = 350,
    counter = 1;
    anim();

    setupListeners()
    getAPI();
    getGithub();
})
})();

let s = (d) => document.querySelector(d);

let setupListeners = () => {

    /* 
        DISCORD PAGE POPUP LISTENERS
    */
        s(".boxes .discord__servers").addEventListener("click",(e) =>{
        s('.content').classList.add('up')

        if(s('.content').classList.contains('reverse__up'))
        s('.content').classList.remove('reverse__up')

        s('.content__discord__servers').classList.remove('unpop')
        s('.content__discord__servers').classList.add('pop')
        pause = true;
        })
  
        s('.content__discord__servers .back').addEventListener('click',(e)=>{
        pause = false;anim();
          s('.content').classList.remove('up')
          s('.content').classList.add('reverse__up')
          setTimeout(() => s('.content').classList.remove('reverse__up'),2600)

          s('.content__discord__servers').classList.add('reverse__unpop')
          s('.content__discord__servers').classList.remove('pop')

          setTimeout(() => {
            s('.content__discord__servers').classList.remove('reverse__unpop')
            s('.content__discord__servers').classList.remove('pop')
            s('.content__discord__servers').classList.add('unpop')
  
            },3000)

          
         })

    /*
         YOUTUBE PAGE LISTENERS
    */

   s(".boxes .youtube__button").addEventListener("click",(e) =>{
    s('.content').classList.add('up')

    if(s('.content').classList.contains('reverse__up'))
    s('.content').classList.remove('reverse__up')

    s('.content__youtube').classList.remove('unpop')
    s('.content__youtube').classList.add('pop')
    pause = true;
    })

    s('.content__youtube .back').addEventListener('click',(e)=>{
    pause = false;anim();

    
        var iframe = s(".youtube-embed-video").querySelector( 'iframe');
        var video = s(".youtube-embed-video").querySelector( 'video' );
        if ( iframe ) {
            var iframeSrc = iframe.src;
            iframe.src = iframeSrc;
        }
        if ( video ) {
            video.pause();
        }
    
      s('.content').classList.remove('up')
      s('.content').classList.add('reverse__up')
      setTimeout(() => s('.content').classList.remove('reverse__up'),2600)

      s('.content__youtube').classList.add('reverse__unpop')
      s('.content__youtube').classList.remove('pop')

      setTimeout(() => {
        s('.content__youtube').classList.remove('reverse__unpop')
        s('.content__youtube').classList.remove('pop')
        s('.content__youtube').classList.add('unpop')

        },3000)

      
     }) 

     /*
         GITHUB PAGE LISTENERS
    */

   s(".boxes .github__button").addEventListener("click",(e) =>{
    s('.content').classList.add('up')

    if(s('.content').classList.contains('reverse__up'))
    s('.content').classList.remove('reverse__up')

    s('.content__github').classList.remove('unpop')
    s('.content__github').classList.add('pop')
    pause = true;
    })

    s('.content__github .back').addEventListener('click',(e)=>{
    pause = false;anim();
    
      s('.content').classList.remove('up')
      s('.content').classList.add('reverse__up')
      setTimeout(() => s('.content').classList.remove('reverse__up'),2600)

      s('.content__github').classList.add('reverse__unpop')
      s('.content__github').classList.remove('pop')

      setTimeout(() => {
        s('.content__github').classList.remove('reverse__unpop')
        s('.content__github').classList.remove('pop')
        s('.content__github').classList.add('unpop')
        },3000)
     }) 

      /*
         TWITTER PAGE LISTENERS
    */

   s(".boxes .twitter__button").addEventListener("click",(e) =>{
    s('.content').classList.add('up')

    if(s('.content').classList.contains('reverse__up'))
    s('.content').classList.remove('reverse__up')

    s('.content__twitter').classList.remove('unpop')
    s('.content__twitter').classList.add('pop')
    pause = true;
    })

    s('.content__twitter .back').addEventListener('click',(e)=>{
    pause = false;anim();
    
      s('.content').classList.remove('up')
      s('.content').classList.add('reverse__up')
      setTimeout(() => s('.content').classList.remove('reverse__up'),2600)

      s('.content__twitter').classList.add('reverse__unpop')
      s('.content__twitter').classList.remove('pop')

      setTimeout(() => {
        s('.content__twitter').classList.remove('reverse__unpop')
        s('.content__twitter').classList.remove('pop')
        s('.content__twitter').classList.add('unpop')
        },3000)
     }) 
}


let getAPI = async () => {
    youtube_api_key_V3 = s('.page__youtube').getAttribute("youtube-api-key-V3")

    youtube_channel_id = s('.page__youtube').getAttribute('youtube-channel-id')

    if(!youtube_api_key_V3 || !youtube_channel_id) return

   let info = await getYOUTUBEAPI(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${youtube_channel_id}`)

   let stats = await getYOUTUBEAPI(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtube_channel_id}`)

    youtubeuser.pdp = info.items[0].snippet.thumbnails.default.url;
    youtubeuser.name = info.items[0].snippet.title;
    youtubeuser.subscribers = stats.items[0].statistics.subscriberCount


    s('.page__youtube .img__user img').setAttribute("src",youtubeuser.pdp) 
    s('.page__youtube .name__user').innerHTML = youtubeuser.name
    s('.page__youtube .suscribers').innerHTML = youtubeuser.subscribers + " Abonnés"
    s('.page__youtube .subscribe').setAttribute("href", `https://www.youtube.com/channel/${youtube_channel_id}?sub_confirmation=1`)

}

let getGithub = async () => {



    github_username = s('.page__github').getAttribute('github-username')
    if(github_username === null) return
    err = false
    let githubinfo = await getJSON(`https://api.github.com/users/${github_username}`).catch((e) => err = true)
    if(err) return

    s('.github__profil .img__profil img').setAttribute('src',githubinfo.avatar_url)
    s('.github__profil .name__profil a').setAttribute('href',githubinfo.html_url)
    s('.github__profil .name__profil a').innerHTML = githubinfo.login

    let reposinfo = await getJSON(githubinfo.repos_url).catch((e) => err = true)
    if(reposinfo === null) return
    if(err) return

    if(!reposinfo[0]) return;

    document.querySelector('.github_repo').innerHTML = ``

    reposinfo.forEach(repo => {
        
        document.querySelector('.github_repo').innerHTML += `
        <div class="repo">
        <div class="repo__name"><a href="${repo.html_url}">${repo.name}</a></div>
        <div class="repo__desc">${repo.description}</div>
        <div class="repo__lang">${repo.language}</div>
        </div>`

    });

    
}


async function getYOUTUBEAPI(url){
    if(!youtube_api_key_V3) return;
    
    return new Promise(resolve => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url + "&key="+ youtube_api_key_V3, true);
        xhr.onload = function(e) {
          resolve(JSON.parse(xhr.response));
        };
        xhr.onerror = function () {
          resolve(undefined);
        };
        xhr.send();
     }) 
}

async function getJSON(url){

    return new Promise(resolve => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = function(e) {
          resolve(JSON.parse(xhr.response));
        };
        xhr.onerror = function () {
          resolve(undefined);
        };
        xhr.send();
     }) 
}