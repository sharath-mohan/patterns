let classInstance;
let classCounter = 0;
let objectCounter = 0;
class SingletonClass {
  constructor() {
    if (classInstance) {
      throw new Error("An Instance is already created");
    }
    classInstance = this;
  }
  increment() {
    return ++classCounter;
  }
}
const SingletonObject = {
  increment() {
    return ++objectCounter;
  },
};
const SingletonClassCounter = Object.freeze(new SingletonClass());
const SingletonObjectCounter = Object.freeze(SingletonObject);
export { SingletonClassCounter, SingletonObjectCounter };
