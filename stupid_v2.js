module.exports = {
  list: {sort: sort}
}

function sort(list) {
  var i = 0;
  do {
    if(isLast(i, list)) {
      return list
    }
    if(i % 2 === 0) {
      if(!isLessThan(i, i+1, list)) {
        list = swapAt(i, i+1, list);
        if(i>0 && isLast(i, list)) {
          i--;
        }
      }
    } else {
      if(!isGreaterThan(i, i+1, list)) {
        list = swapAt(i, i+1, list);
        if(i>0 && isLast(i, list)) {
          i--;
        }
      }
    }
    i++;
  } while (i <= list.length)
  return list
}

function isLast(i, list) {
  return i >= list.length
}

function isLessThan(i1, i2, list) {
  return list[i1] < list[i2];
}

function isGreaterThan(i1, i2, list) {
  return list[i1] > list[i2];
}

function swappableAt(i1, i2, list, predicate) {
  return predicate.apply(undefined, i1, i2, list)
}

function swapAt(i1, i2, list) {
  if(i1 === i2 || i2 >= list.length || i1 >= list.length) {return list}
  var b = list[i1];
  list[i1] = list[i2];
  list[i2] = b;
  return list;
}
