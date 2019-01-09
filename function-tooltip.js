
var statusColors = $jsonStatusColorMultiple;
var status = $jsonStatus
let obj ={}
obj['viewTooltip'] = null

document.onmouseover = function(e) {
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

        obj['left'] = obj['coords'].left + obj['target'].offsetWidth - obj['element'].offsetWidth / 2

        if (  obj['left'] < 0){
            obj['left'] = 0;
        }

        obj['top'] = obj['coords'].top - obj['element'].offsetHeight - 5;

        if (obj['top'] < 0) { // не вылезать за верхнюю границу окна
            obj['top'] = obj['coords'].top + obj['target'].offsetHeight + 5;
        }
        console.log('2222222222222', $model->showDepartment);
        obj['element'].style.left =  obj['left'] + 'px';
        obj['element'].style.top =obj['top']+ 'px';
        // console.log(document['body'])
        document['body'].appendChild(obj['element']);
        obj['viewTooltip'] =  obj['element']

        // console.log('sssssssssssss', obj['tooltip'])
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
