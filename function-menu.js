function getObject(type){

    let content =  document['body'].querySelector('.rescomplex-index')
    content.querySelector('thead').style.borderTop = '1px solid #e8e8e8'
    content.querySelector('thead').style.transform = `translateY(0px)`
    content.querySelector('thead').style.textAlign = 'center'
    // content.querySelector('.rescomplex-booking-search').style.backgroundColor = 'bisque'
    // content.querySelector('thead').style.backgroundColor = 'bisque'
    // content.querySelector('.row').style.backgroundColor = 'bisque'
    let obj = {}
    obj['body'] =  document['body'].getBoundingClientRect().top
    obj['row'] =    (obj['body'] - content.querySelector('.row').getBoundingClientRect().top)* -1
    obj['row:height'] = content.querySelector('.row').clientHeight
    obj['rescomplex-booking-search'] = (obj['body'] - content.querySelector('.rescomplex-booking-search').getBoundingClientRect().top)*-1
    obj['rescomplex-booking-search:height'] = content.querySelector('.rescomplex-booking-search').clientHeight
    obj['thead'] = (obj['body'] - content.querySelector('thead').getBoundingClientRect().top)* -1
    obj['thead:hight'] =  obj['thead']  - (obj['rescomplex-booking-search'] +     obj['rescomplex-booking-search:height'])
    obj['tbody'] =   content.querySelector('tbody')
    obj['tbody'] =    obj['tbody'].children
    let prop = {}
    prop['getBoundingClientRect'] = {}
    for(let key = 0; key < obj['tbody'].length; key++){
        prop['getBoundingClientRect'][key] =  obj['tbody'][key].getBoundingClientRect().top
        if(prop['getBoundingClientRect'][key] - 220 < 0){
            //     obj['tbody'][key].style.opacity = 0;
            //     console.log('---таблица----',  obj['tbody'][key])
            //     console.log('---таблица----',  prop['getBoundingClientRect'][key] - 230)
        }else{
            obj['tbody'][key].style.opacity = 1;
        }
    }
    console.log('---таблица----',  prop['getBoundingClientRect'])
    window.addEventListener('scroll', scroll, false);
    function scroll(e) {
        prop['getBoundingClientRect'] = {}
        for(let key = 0; key < obj['tbody'].length; key++){
            prop['getBoundingClientRect'][key] =  obj['tbody'][key].getBoundingClientRect().top
            if(prop['getBoundingClientRect'][key] - 220 < 0){
                obj['td'] = obj['tbody'][key].querySelectorAll('td')
                for(let key = 0; key < obj['td'].length; key++){
                    obj['td'][key].style.borderColor = 'white'
                }
                obj['tbody'][key].style.opacity = 0;
                console.log('---скрыть----',  prop['getBoundingClientRect'][key] - 230)
            }else{
                obj['tbody'][key].style.opacity = 1;
            }

        }
        let body = document['body'].getBoundingClientRect().top * -1
        console.log('-------верх----->>>>',body)
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
            console.log('-смещение->>>',y)
        }else{
            content.querySelector('thead').style.transform = `translateY(0px)`
        }
    }
}
export default {
    getObject: obj['getObject']
}
