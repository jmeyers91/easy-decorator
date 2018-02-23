# easy-decorator

## Install

```
npm install easy-decorator --save
```

## Example

```
import easyDecorator from 'easy-decorator';
import _ from 'lodash';

const once = easyDecorator(fn => {
  let hasRun = false;
  let result;
  return function() {
    if(!hasRun) {
      result = fn.apply(this, arguments);
      hasRun = true;
    }
    return result;
  };
});

const throttle = easyDecorator(_.throttle);

class C {
  @once get myGetter() {

  }

  @once myMethod() {

  }

  @throttle(250) myThrottledMethod() {

  }
}
```
