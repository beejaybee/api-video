(this["webpackJsonpapi-video"]=this["webpackJsonpapi-video"]||[]).push([[0],{20:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(17),c=a.n(r),s=a(7),l=a.n(s),o=a(19),m=a(2),u=a(3),d=a(5),v=a(4),p=a(6),h=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={term:""},a.onFormSubmit=function(e){e.preventDefault(),a.props.onSubmital(a.state.term)},a.onInputChange=function(e){a.setState({term:e.target.value})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"search-bar ui segment"},i.a.createElement("form",{className:"ui form",onSubmit:this.onFormSubmit},i.a.createElement("div",{className:"ui field"},i.a.createElement("label",null,"Videos Search"),i.a.createElement("input",{value:this.state.term,type:"text",onChange:this.onInputChange}))))}}]),t}(i.a.Component),f=a(18),b={part:"snippet",maxResults:10,key:"AIzaSyCd99YLCG3JGeB_q27v_jYuvYEa81IF9sY"},E=a.n(f).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),S=(a(43),function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("div",{onClick:function(){return a(t)},className:" video-items item"},i.a.createElement("img",{className:"ui image",src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.snippet.title)))}),g=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return i.a.createElement(S,{key:e.id.videoId,onVideoSelect:a,video:e})}));return i.a.createElement("div",{className:"ui relaxed divided list"},n)},w=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Loading...");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",null,i.a.createElement("div",{className:"ui segment"},i.a.createElement("iframe",{src:a,allowFullScreen:!0,title:"video",width:"560",height:"315"})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("h4",{className:"ui header"},t.snippet.title),i.a.createElement("p",null,t.snippet.description)))},N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={videos:[],selectedVideo:null},a.handleFormSubmit=function(e){var t;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(E.get("/search",{params:Object(o.a)({},b,{q:e})}));case 2:t=n.sent,a.setState({videos:t.data.items,selectedVideo:t.data.items[0]});case 4:case"end":return n.stop()}}))},a.onVideoSelect=function(e){a.setState({selectedVideo:e})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.handleFormSubmit("cars")}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement(h,{onSubmital:this.handleFormSubmit}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(w,{video:this.state.selectedVideo})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(g,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})))))}}]),t}(i.a.Component);c.a.render(i.a.createElement(N,null),document.querySelector("#root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.b0614fff.chunk.js.map