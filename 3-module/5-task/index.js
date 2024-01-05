function getMinMax(str) {
  return str
    .split(' ')
    .reduce((accum, item, currentIndex) => {
      if(!isNaN(item)){
        if(currentIndex===0){
          accum.min = +item;
          accum.max = +item;
        }
        else if(item>accum.max){
          accum.max = +item;
        }
        else if(item<accum.min){
          accum.min = +item;
        }
      }
      return accum
    }, {});
}
