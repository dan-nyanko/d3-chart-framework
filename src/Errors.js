/**
 * InvalidNodeError - error thrown when an object is not instanceof Node
 *
 * @param {string} [message] - (optional) the message to the user
 */
export class InvalidNodeError extends Error {
  constructor(message) {
    const message_ = message || 'Is not instanceof Node.';
    super(message_);
  }
}

/**
 * InvalidGroupError - error thrown when an object is not instanceof Group
 *
 * @param {string} [message] - (optional) the message to the user
 */
export class InvalidGroupError extends Error {
  constructor(message) {
    const message_ = message || 'Is not instanceof Group.';
    super(message_);
  }
}
