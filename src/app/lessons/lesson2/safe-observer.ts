/**
 * Safe Observer
 *
 * Observer Guarantees
 * 1) If you pass an Observer doesn’t have all of the methods implemented, that’s okay.
 * 2) You don’t want to call `next` after a `complete` or an `error`
 * 3) You don’t want anything called if you’ve unsubscribed.
 * 4) Calls to `complete` and `error` need to call unsubscription logic.
 * 5) If your `next`, `complete` or `error` handler throws an exception,
 * you want to call your unsubscription logic so you don’t leak resources.
 * 6) `next`, `error` and `complete` are all actually optional. You don’t have
 *  to handle every value, or errors or completions. You might just want to handle one or two of those things.
 */


interface Observer {
  next?: Function;
  error?: Function;
  complete?: Function;
}

export class SafeObserver {

  destination: Observer;
  isUnsubscribed: boolean;

  constructor(destination: Observer) {
    this.destination = destination;
  }

  next(value) {
    // only try to next if you're subscribed have a handler
    if (!this.isUnsubscribed && this.destination.next) {
      try {
        this.destination.next(value);
      } catch (err) {
        // if the provided handler errors, teardown resources, then throw
        this.unsubscribe();
        throw err;
      }
    }
  }

  error(err) {
    // only try to emit error if you're subscribed and have a handler
    if (!this.isUnsubscribed && this.destination.error) {
      try {
        this.destination.error(err);
      } catch (e2) {
        // if the provided handler errors, teardown resources, then throw
        this.unsubscribe();
        throw e2;
      }
      this.unsubscribe();
    }
  }

  complete() {
    // only try to emit completion if you're subscribed and have a handler
    if (!this.isUnsubscribed && this.destination.complete) {
      try {
        this.destination.complete();
      } catch (err) {
        // if the provided handler errors, teardown resources, then throw
        this.unsubscribe();
        throw err;
      }
      this.unsubscribe();
    }
  }

  unsubscribe() {
    this.isUnsubscribed = true;
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
}
