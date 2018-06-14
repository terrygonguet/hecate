// @flow
declare var browser: any;

type Settings = {
  insert_game: boolean,
  auto_open: boolean
}
type SaveData = {
  settings: Settings
}
type Message = {
  type: string,
  data?: Object
}

var settings: Settings

browser.storage.sync.get('settings')
  .then((data: SaveData) => {
    settings = data.settings || {
      insert_game: true,
      auto_open: true
    }
  })

function saveData (data: SaveData = { settings }): Promise<void> {
  return browser.storage.sync.set(data)
}

browser.runtime.onMessage.addListener((message: Message): Promise<void> => {
  if (message.type === 'saveData') return saveData()
  else return Promise.reject(new Error('unknown message type'))
})
