function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}


function addFirstValue() {
  let firstValue=makeAdder(parseInt(document.getElementById("firstValue").value,10));
alert("At this moments, the functions value is:   "+firstValue+"  So, its not oly a function it also has access to the external scope...Lets add the second value!");
alert("By adding a value to the function created, the inner function can use the inner and outer values to calculate..."+firstValue(parseInt(document.getElementById("secondValue").value,10)));
}

function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;