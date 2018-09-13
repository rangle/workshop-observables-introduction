import { DataSource } from './data-source';
/**
 * Observable is just a function that takes an observer and 
 * returns a function. We can build our own if we follow the shape:
 *  - A function
 *  - Observer with next, error and complete methods on it
 *  - Return a cancellation function
 */

export interface Observable {
  onData: any;
  onError: any;
  onComplete: any;
}
export interface Observer {
  next?: Function;
  error?: Function;
  complete?: Function
}

/**
 * Our observable
 */
export function myObservable(observer: Observer) {
  let datasource = new DataSource();
  datasource.onData = (e) => observer.next(e);
  datasource.onError = (err) => observer.error(err);
  datasource.onComplete = () => observer.complete();
  return () => {
    datasource.destroy();
  };

  /**
   * NOTE:
   * The example Observable implementations used in
   * this presentation return cancellation functions,
   * whereas RxJS and the es-observable spec return
   * Subscription objects which offer a method for unsubscribing. 
   */
}