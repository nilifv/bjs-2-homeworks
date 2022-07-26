function cachingDecoratorNew(func) {
  let cache = [
    { hash: "10,20,30", value: 60 },
    { hash: "2,2,2", value: 6 },
  ];

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
    func.apply(this, args);

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
    wrapper.count++;
    func.apply(this, args);

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this, args)
    }, ms);
  }


}
