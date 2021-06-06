class BaseClassError extends Error {
    constructor(className, message = null) {
      super(message || `Don't use base class ${className} directly, extend class before instancing it.`);
    }
  }
  
  export default BaseClassError;
  