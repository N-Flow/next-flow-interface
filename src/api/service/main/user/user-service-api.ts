import UserInfo from "@/api/service/main/user/dto/user-info.interface";
import UserAuth from "@/api/service/main/user/dto/user-auth.interface";

export default interface UserServiceApi {

  auth: UserAuth

  info: UserInfo

  clear(): void

}
