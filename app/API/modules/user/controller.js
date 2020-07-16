import BaseController from '../../core/Controller'
import UserService from "./service"
export default class UserController extends BaseController {
    constructor() {
        super();
    }
    getModule() {
        return UserService.Instance();  
    }
    login(param) {
        return this.service.login(param);
    }
    updateUserById(data, id) {
        return this.service.updateUserById(data, id);
    }
    uploadAvatar(file, id) {
        return this.service.uploadAvatar(file, id)
    }
    passwordConfirm(req) {
        return this.service.passwordConfirm(req)
    }
    getListOffSet(offset, limit) {
        return this.service.getListOffSet(offset, limit,'roles',['ID', 'Name', 'Email', 'Gender', 'Avatar', 'Slug'])
    }
    getMe(decode) {
        return this.service.getMe(decode)
    }
}