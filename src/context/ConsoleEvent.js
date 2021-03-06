/* @flow */

import type { Event } from './Event';

type Message = {
  text: string,
};

export type ConsoleRawEvent = {
  message: Message,
};

export default class ConsoleEvent implements Event {
  _rawEvent: ConsoleRawEvent;

  constructor(rawEvent: ConsoleRawEvent) {
    this._rawEvent = rawEvent;
  }

  /**
   * Underlying raw event from Console.
   *
   */
  get rawEvent(): ConsoleRawEvent {
    return this._rawEvent;
  }

  /**
   * Determine if the event is a message event.
   *
   */
  get isMessage(): boolean {
    return true;
  }

  /**
   * The message object from Console raw event.
   *
   */
  get message(): Message {
    return this._rawEvent.message;
  }

  /**
   * Determine if the event is a message event which includes text.
   *
   */
  get isText(): boolean {
    return true;
  }

  /**
   * The text string from Console raw event.
   *
   */
  get text(): string {
    return (this.message: any).text;
  }
}
