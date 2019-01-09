<script>

let content =  document['body'].querySelector('.rescomplex-index')
content.querySelector('thead').style.borderTop = '1px solid #e8e8e8'
content.querySelector('thead').style.transform = `translateY(0px)`
content.querySelector('thead').style.textAlign = 'center'
content.querySelector('.rescomplex-booking-search').style.backgroundColor = 'bisque'
content.querySelector('thead').style.backgroundColor = 'bisque'
content.querySelector('.row').style.backgroundColor = 'bisque'

let obj = {}
obj['body'] =  document['body'].getBoundingClientRect().top
obj['row'] =    (obj['body'] - content.querySelector('.row').getBoundingClientRect().top)* -1
obj['row:height'] = content.querySelector('.row').clientHeight
obj['rescomplex-booking-search'] = (obj['body'] - content.querySelector('.rescomplex-booking-search').getBoundingClientRect().top)*-1
obj['rescomplex-booking-search:height'] = content.querySelector('.rescomplex-booking-search').clientHeight
obj['thead'] = (obj['body'] - content.querySelector('thead').getBoundingClientRect().top)* -1
obj['thead:hight'] =  obj['thead']  - (obj['rescomplex-booking-search'] +     obj['rescomplex-booking-search:height'])
console.log(obj)

window.addEventListener('scroll', scroll, false);
function scroll(e) {
    let body = document['body'].getBoundingClientRect().top * -1
    console.log(body)
    if(body > obj['row']){
        let y = body + obj['row'] *-1
        content.querySelector('.row').style.transform = `translateY(${y}px)`
        content.querySelector('.rescomplex-booking-search').style.transform = `translateY(${y}px)`
    }else{
        content.querySelector('.row').style.transform = `translateY(0px)`
        content.querySelector('.rescomplex-booking-search').style.transform = `translateY(0px)`
    }
    if(body >obj['rescomplex-booking-search']){
        let y = (body + obj['row'] *-1) -  obj['thead:hight']
        content.querySelector('thead').style.transform = `translateY(${y}px)`
        console.log('-3->>>',y)
    }else{
        content.querySelector('thead').style.transform = `translateY(0px)`
    }
}
</script>
