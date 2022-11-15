import { EventEmitter } from 'events'
import { connect } from 'net'

export class Gearman extends EventEmitter {
  constructor(
    host: string,
    port: string,
    options: {
      timeout: number
    }
  )

  close(): void

  connect(callback: Function): void

  submitJob(funcName: string, data: string, options?: Record<string, any>): void
}
