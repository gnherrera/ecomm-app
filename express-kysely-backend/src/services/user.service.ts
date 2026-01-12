import { UserRepository } from '../repositories/user.repository'

export class UserService {
  constructor(private userRepo: UserRepository) {}

  getUsers() {
    return this.userRepo.findAll()
  }

  getUser(id: number) {
    return this.userRepo.findById(id)
  }

  createUser(data: { name: string; email: string }) {
    if (!data.email) {
      throw new Error('Email is required')
    }
    return this.userRepo.create(data)
  }
}
