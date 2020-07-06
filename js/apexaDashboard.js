let numOfData = 0;

let color;

fcopy = d3.format;

function myFormat(){
         function_ret = fcopy.apply(d3, arguments)
         return (function(args){return function (){
                return args.apply(d3, arguments).replace(/G/, "B");
         }})(function_ret)
}

d3.format = myFormat;

function init(initData) {

  numOfData = initData.numOfData;

  color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, numOfData));

}

function chartColor (dataName) {

  return color (dataName);

}

function formatAmount (value) {

    amountFormat = d3.format("0.2s");

    return amountFormat(value);

}
