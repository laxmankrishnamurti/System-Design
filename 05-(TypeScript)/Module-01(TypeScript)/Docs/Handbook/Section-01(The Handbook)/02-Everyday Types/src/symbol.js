const LOG_LEVEL = {
    INFO: Symbol("info"),
    WARN: Symbol("warn"),
    ERROR: Symbol("error"),
  };
  
  function log(message, level) {
    if (level === LOG_LEVEL.INFO) {
      console.log("Info:", message);
    } else if (level === LOG_LEVEL.WARN) {
      console.warn("Warning:", message);
    } else if (level === LOG_LEVEL.ERROR) {
      console.error("Error:", message);
    }
  }
  
  log("This is an info message.", LOG_LEVEL.INFO);