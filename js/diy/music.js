const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: '想去海边',
        artist: '夏日入侵企画',
        url: 'https://music.163.com/#/song?id=1413863166',
        cover: 'http://p1.music.126.net/sLWN-iePq4ESOMPER0IWgQ==/109951164602081973.jpg?param=130y130',
    }, 
	]
});