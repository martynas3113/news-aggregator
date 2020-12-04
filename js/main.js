loadXMLFeed = () => {
    const url = "https://www.tv3.lt/rss/sarasas/5";
    fetch(url)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(data, "application/xml");
            displayFeed(xml);
        })

}

document.addEventListener('DOMContentLoaded', loadXMLFeed)

displayFeed = (feed) => {
    let list = document.querySelector(".item")
    let itemXML = feed.getElementsByTagName('item');
    let itemXMLLength = feed.getElementsByTagName('item').length;
    let title = document.querySelector('.title')
    
    let Titlefeed = feed.getElementsByTagName('description')[0].innerHTML
    title.innerHTML = Titlefeed

    if (itemXMLLength === 0) {
        list.innerHTML = `<li><h3>No news to display...</h3></li>`
    } else {

        for (let i = 0; i < itemXMLLength; i++) {
            let li = document.createElement('li');
            li.className = "ListItem";
            let HTML = `
            <h3>${itemXML[i].getElementsByTagName('title')[0].innerHTML}</h3> 
            <p>${itemXML[i].getElementsByTagName('description')[0].innerHTML}</p>
            <a href="${itemXML[i].getElementsByTagName('link')[0].innerHTML}">Plačiau</a>
            `
            li.innerHTML += HTML

            list.appendChild(li)
        }
    }
    setTimeout(function(){
        loadXMLFeed();
        startRefresh(itemXML);
    },3600000)
}

startRefresh = (itemXMLData) => {
    let listItem = document.getElementsByClassName('ListItem');
    
    for(i = 15; i<listItem.length; i++){
        if(i < listItem.length) {
            listItem[listItem.length].remove
        }
    }

}