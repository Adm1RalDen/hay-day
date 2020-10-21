class StorageService {
  static instance

  keysList = {
    isShowMainPage: 'isShowMainPage',
    usersData: 'usersData',
  }

  toString(e) {
    return JSON.stringify(e)
  }

  setIsShowMainPage(payload) {
    localStorage.setItem(this.keysList.isShowMainPage, this.toString(payload))
  }

  saveUsersData(payload) {
    localStorage.setItem(this.keysList.usersData, this.toString(payload))
  }

  getStorageData() {
    const isShowMainPage = localStorage.getItem(this.keysList.isShowMainPage)
    const usersData = localStorage.getItem(this.keysList.usersData)
    return {
      isShowMainPage,
      usersData,
    }
  }

  clearStorage() {
    localStorage.clear()
  }

  static getInstance() {
    if (this.instance) return this.instance
    this.instance = new StorageService()
    return this.instance
  }
}

export default StorageService
