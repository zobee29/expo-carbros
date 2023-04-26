import { ref, getStorage, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";


export default class StorageService {
  constructor(referenceName){
    this.storage = getStorage();
    this.referenceName = referenceName;
  }

  download(filename) {
    return getDownloadURL(ref(this.storage, `${this.referenceName}/${filename}`))
  }

  delete(filename) {
    return deleteObject(ref(this.storage, `${this.referenceName}/${filename}`))
  }

  upload(file, filename) {
    return uploadBytes(ref(this.storage, `${this.referenceName}/${filename || file.name}`), file);
  }
}