import UserAuth from '@/service/main/user/dto/user-auth.interface'
import UserInfo from '@/service/main/user/dto/user-info.interface'

export default interface UserServiceApi {
  auth: UserAuth

  info: UserInfo

  clear(): void
}
