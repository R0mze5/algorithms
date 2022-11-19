/**
 * Proxy Design Pattern
 *
 * Types of proxies:
 * - Virtual Proxy: An object that can cache parts of the real object, and than complete loading the full object when necessary.
 * - Remote Proxy: Can relay messages to a real object that exists in a different address space.
 * - Protection Proxy: Apply an authentication layer in front of the real object.
 * - Smart Reference: An object whose internal attributes can be overridden or replaced.
 *
 * Terminology:
 *
 * Proxy: An object with an interface identical to the real subject. Can act as an placeholder until the real subject is loaded or as gatekeeper applying extra functionality.
 * Subject Interface: An interface implemented by both the Proxy and Real Subject
 * Real Subject: The actual real object that the proxy is representing
 * Client: The client application that uses and creates the Proxy
 *
 */

interface ISubject {
  request(): number[];
}

class RealSubject implements ISubject {
  enormousData: number[];

  constructor() {
    this.enormousData = [1, 2, 4];
  }

  request() {
    return this.enormousData;
  }
}

export class ProxySubject implements ISubject {
  enormousData: number[];

  realSubject: RealSubject;

  constructor() {
    this.enormousData = [];
    this.realSubject = new RealSubject();
  }

  request() {
    if (this.enormousData.length === 0) {
      console.log("Pulling data from real subject");
      this.enormousData = this.realSubject.request();
      return this.enormousData;
    }

    console.log("Pulling data from Proxy cache");
    return this.enormousData;
  }
}

const PROXY_SUBJECT = new ProxySubject();
console.log(PROXY_SUBJECT.request());
