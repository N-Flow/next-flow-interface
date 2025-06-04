import UserAuth from '@/api/service/main/user/dto/user-auth.interface'
import UserInfo from '@/api/service/main/user/dto/user-info.interface'

export default interface UserServiceApi {
  auth: UserAuth

  info: UserInfo

  clear(): void
}
