import { Kysely } from 'kysely'
import { Database } from '../db/types'

export class UserRepository {
  constructor(private db: Kysely<Database>) {}

  findAll() {
    return this.db
      .selectFrom('users')
      .selectAll()
      .execute()
  }

  findById(id: number) {
    return this.db
      .selectFrom('users')
      .selectAll()
      .where('id', '=', id)
      .executeTakeFirst()
  }

 async create(data: { name: string; email: string }) {
  const result = await this.db
    .insertInto('users')
    .values(data)
    .executeTakeFirst()

  return this.findById(Number(result.insertId))
}


}
