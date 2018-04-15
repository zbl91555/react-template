import { observable, action } from 'mobx'

class Store {
  @observable loading = false

  @action
  changeLoading(state) {
    console.log('changeLoading', state)
    this.loading = state
  }
}

export default new Store()
