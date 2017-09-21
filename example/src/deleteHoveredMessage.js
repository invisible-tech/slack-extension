'use strict'

const api = require('@invisible/slack-browser-api') // eslint-disable-line import/no-unresolved

const deleteHoveredMessage = () => {
  const el = document.querySelector('ts-message:hover')
  if (! el) return

  const ts = el.getAttribute('data-ts')
  const channel = el.getAttribute('data-model-ob-id')
  el.parentNode.removeChild(el)
  api('chat.delete', { channel, ts }).catch(console.error) // eslint-disable-line no-console
}

const shouldDelete = e => e.ctrlKey && e.shiftKey && e.code === 'Space'

const onKeyUp = e => {
  if (shouldDelete(e)) deleteHoveredMessage()
}

document.addEventListener('keyup', onKeyUp, false)
