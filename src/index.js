
exports.min = function min (array) {
  if ( array === undefined || array.length < 1 ) return 0;
  let min = array [ 0 ]
  for ( let i = 1; i < array.length; i++ )
    if ( min > array [ i ] ) {
      min = array [ i ]
    }
  return min;
}

exports.max = function max (array) {
  if ( array === undefined || array.length < 1 ) return 0;
  let max = array [ 0 ]
  for ( let i = 1; i < array.length; i++ )
    if ( max < array [ i ] ) {
      max = array [ i ]
    }
  return max;
}

exports.avg = function avg (array) {
  if ( array === undefined || array.length < 1 ) return 0;
  let avg;
  let sum = array [ 0 ];
  for ( let i = 1; i < array.length; i++ ) {
    sum = sum + array [ i ];
    avg = sum / array.length
  }
  return avg;
}
