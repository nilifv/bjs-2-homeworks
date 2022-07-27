function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.value);
      return "Из кэша: " + objectInCache.value;
    }

    let result = func(...args);
    cache.push({ hash, value: result });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper
}


function debounceDecoratorNew(func, ms) {
  let timerId;

  return function wrapper(...args) {
    if (timerId == undefined) {
      func.apply(this, args);
    }


    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this, args)
    }, ms);
  }
}




function debounceDecorator2(func) {
  let timerId;
  wrapper.count = 0;
  return function wrapper(...args) {
    if (timerId == undefined) {
      func.apply(this, args);
      wrapper.count++;
    }

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this, args)
    }, ms);
  }


}
