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

