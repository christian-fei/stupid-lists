module.exports = {
  list: {
    sort: sort
  }
}

function sort(list) {
  var trackableList = trackList(list);
  var sortedList = [];
  var i = 0;
  while(true) {
    var result;
    if(i % 2 === 0) {
      result = insertNextGreaterItemFrom(trackableList, sortedList, list);
    } else {
      result = insertNextSmallerItemFrom(trackableList, sortedList, list);
    }
    i++;
    sortedList = result.sortedList;
    trackableList= result.trackableList;

    if(sortedList.length === trackableList.length) {
      return sortedList;
    }
    if(exhaustedList(trackableList)) {
      throw new Error('this list cannot be sorted');
    }

    if(i > 1000) {
      console.log('stop recursion for now')
      return []
    }
  }
}

function insertNextGreaterItemFrom(trackableList, sortedList, originalList) {
  var lastItem = last(sortedList);
  var itemFound = false;
  trackableList = trackableList.map(function(item) {
    if(itemFound) {return item;}
    if(!item.used) {
      if(item.value < lastItem) {
        sortedList.push(item.value);
        return use(item);
      } 
    }
    return item;
  });

  return {trackableList, sortedList};
}
function insertNextSmallerItemFrom(trackableList, sortedList, originalList) {
  return {trackableList, sortedList}
}

function last(list) {return list[list.length -1];}

function exhaustedList(trackableList) {
  return trackableList.every(function(item) {
    return item.used
  })
}

function use(item){
  item.used = true;
  return item;
}
function trackList(list) {
  return list.map(function(value, index) {
    return {used:false, value: value}
  })
}
