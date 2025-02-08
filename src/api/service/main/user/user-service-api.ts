import UserInfo from "@/api/service/main/user/interface/user-info.interface";
import UserAuth from "@/api/service/main/user/interface/user-auth.interface";

export default interface UserServiceApi {

  auth: UserAuth

  info: UserInfo

  clear(): void

}
