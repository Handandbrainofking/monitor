export * from './handleEvents'
export * from './load'
export * from './replace'
import { setupReplace } from './load'
import { log } from '@mito/core'
import { _global } from '@mito/utils'
import { SDK_VERSION, SDK_NAME, initOptions } from '@mito/common'
import { InitOptions } from '@mito/types'
function webInit(options: InitOptions = {}): void {
  if (!('XMLHttpRequest' in _global) || options.disabled) return
  initOptions(options)
  setupReplace()
}

function init(options: InitOptions = {}): void {
  webInit(options)
}

export { SDK_VERSION, SDK_NAME, init, log }
