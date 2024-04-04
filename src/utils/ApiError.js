class ApiError extends Error {
  constructor(
    statusCode, // Status code of the API response
    message = "Something went wrong", // Default error message if not provided
    errors = [], // Optional array to hold additional error details
    stack = "" // Optional stack trace
  ) {
    super(message); // Call the constructor of the Error class with the provided message

    // Initialize properties specific to ApiError instance
    this.statusCode = statusCode; // Assign provided statusCode to this instance's statusCode property
    this.data = null; // Initialize data property to null
    this.message = message; // Assign provided message to this instance's message property
    this.success = false; // Assign false to success property
    this.errors = errors; // Assign provided errors array to this instance's errors property

    // Conditionally set stack trace
    if (stack) {
      this.stack = stack; // If stack is provided, assign it to this instance's stack property
    } else {
      // If stack is not provided, capture the stack trace
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError }; // Export the ApiError class to make it accessible from other modules
