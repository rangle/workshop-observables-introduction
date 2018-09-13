import { DataSource } from './data-source';
import { SafeObserver } from './safe-observer';

export class Observable {
  _subscribe: any;
  constructor(_subscribe) {
    this._subscribe = _subscribe;
  }
  
  subscribe(observer) {
    const safeObserver = new SafeObserver(observer);
    return this._subscribe(safeObserver);
  }
}

/**
 * our observable
 * Having observables as a class/object enables us to easily apply 
 * a SafeObserver to passed anonymous observers (and handler functions
 * if you like the `subscribe(fn, fn, fn)` signature in RxJS) and
 * provide better ergonomics for the developer-user.
 * By handling the creation of a SafeObserver inside Observable’s `subscribe`
 * implementation, Observables can again be defined in the simplest possible way:
 */
export const myObservable = new Observable((observer) => {
  const safeObserver = new SafeObserver(observer);
  const datasource = new DataSource();
  datasource.onData = (e) => safeObserver.next(e);
  datasource.onError = (err) => safeObserver.error(err);
  datasource.onComplete = () => safeObserver.complete();

  safeObserver.unsubscribe = () => {
    datasource.destroy();
  };

  return safeObserver.unsubscribe.bind(safeObserver);
})

