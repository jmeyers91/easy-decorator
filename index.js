
module.exports = function easyDecorator(fn) {
  return function argReceiver(...fnArgs) {
    // Check if the decorator is being called without arguments (ex `@foo methodName() {}`)
    if(fnArgs.length === 3) {
      const [ target, key, descriptor ] = fnArgs;
      if(descriptor && (descriptor.value || descriptor.get)) {
        fnArgs = [];
        return descriptorChecker(target, key, descriptor);
      }
    }

    return descriptorChecker;

    // descriptorChecker determines whether a method or getter is being decorated
    // and replaces the appropriate key with the decorated function.
    function descriptorChecker(target, key, descriptor) {
      const descriptorKey = descriptor.value ? 'value' : 'get';
      return Object.assign({}, decorator, {
        [descriptorKey]: fn(descriptor[descriptorKey], ...fnArgs),
      });
    }
  };
}
