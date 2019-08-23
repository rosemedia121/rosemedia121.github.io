var proxyUrl = 'https://rose-beta-view.glitch.me/',
    targetUrl= 'https://rose-beta-api.glitch.me/wiki/twiki'

var header = new Vue({
    el: '#headApp01'
    ,data: {
        param: {text:''}
        ,visited:true
    }
    ,methods: {
        search: function (){
            console.log('검색 >',this.param.text);
        }
    }
});



var readWordApp01 = new Vue({
    el: '#readWordApp01'
    ,data: {
        "title": '',
        "desc": '',
        "badges": [],
        "children": []

    },
    created() {
      fetch('https://rose-beta-api.glitch.me/api/v1/wiki/twiki')
      .then((response)=>{
        if(response.ok){
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then((json)=>{
        this.title= json.title;
        this.desc=json.desc;
        this.badges=json.badges;
        this.children=json.children;
      })
      .catch((error)=>{
        console.log(error);
      });
  }
});