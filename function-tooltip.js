function getObject(type){
    return new Promise(function (resolve, reject) {
        let obj ={}
        obj['statusColors'] = 'input obj'
        let allElems = document.querySelectorAll('html /deep/ *');
        let nodeNames = [].map.call(allElems, el => el.nodeName.toLowerCase()).filter((value, index, self) => self.indexOf(value) === index)
        for(let key in nodeNames){
            if(nodeNames[key].split('-').length > 1){
                let lacertaAccess = {}
                lacertaAccess['frontend'] = document.querySelector(nodeNames[key])
                lacertaAccess['backend'] = {}
                lacertaAccess['backend']['in'] = {}
                lacertaAccess['backend']['out'] = {}
                lacertaAccess['backend']['in']  = JSON.parse(document.querySelector(nodeNames[key])._root['querySelector']('in').textContent)
                lacertaAccess['backend']['out'] = JSON.parse(document.querySelector(nodeNames[key])._root['querySelector']('out').textContent)
                lacertaAccess['backend']['data'] = statusColors
                obj['lacertaAccess'] = lacertaAccess
            }
        }

        obj['viewTooltip'] = null
        document.onmouseover = function(e) {
            const hex2rgba = (hex, alpha = 1) => {
                const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
                return [r, g, b];
            };
            obj['target'] = e.target;
            obj['class'] = obj['target'].getAttribute('class')
            if (obj['class'] === 'label label-info'){
                obj['tooltip'] = obj['target']
                obj['element'] =  document.createElement('section');
                obj['element'].className = 'tooltip';
                obj['element'].style.position = 'absolute';
                obj['element'].innerHTML = obj['tooltip']
                obj['element'].style.opacity = '1'
                obj['coords']= obj['target'].getBoundingClientRect();
                obj['coords']['up'] =  document['body'].getBoundingClientRect().top * -1

                let keys = Object.keys(obj['lacertaAccess']['backend']['in']['statusModelList'])
                let menu = document.createElement('menu')
                menu.style.listStyleType = 'none';
                for(let key in keys){
                    let li = document.createElement('li')
                    let ttt = obj['lacertaAccess']['backend']['data'][key]
                    ttt = hex2rgba(ttt, 1)
                    let one = 'rgba(' + ttt[0]+','+ttt[1]+','+ttt[2]+')'

                    li.style.backgroundColor = one
                    li.style.marginBottom = 0.4 + 'vw'
                    li.borderRadius = 2 + 'px'

                    li.innerText = obj['lacertaAccess']['backend']['in']['statusModelList'][keys[key]]
                    menu.appendChild(li)
                }
                obj['element'] =   menu
                obj['element'].style.width = '26vw'
                obj['element'].style.position = 'absolute';
                obj['element'].style.right =    (obj['coords']['width'] - 50) + 'px';
                obj['element'].style.top =  (obj['coords']['up'] + obj['coords']['top']+ obj['coords']['height'])+ 'px';
                document['body'].appendChild(obj['element']);
                obj['viewTooltip'] =  obj['element']
            } else{
                return
            }
        };
        document.onmouseout = function(e) {
            if (obj['viewTooltip']){
                if (obj['viewTooltip'].parentNode) {
                    obj['viewTooltip'].parentNode.removeChild(obj['viewTooltip']);
                    obj['viewTooltip'] = null
                }
            }
        }

    })
}


export default {
    getObject: obj['getObject']
}

