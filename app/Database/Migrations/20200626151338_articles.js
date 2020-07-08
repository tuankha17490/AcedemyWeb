
export function up(knex) {
  return knex.schema.createTable('Articles', t => {
    t.increments('ID')
    t.integer('User_Id').unsigned()
    t.foreign('User_Id').references('Users.ID')
    t.string('Location')
    t.string('Title')
    t.string('Duration')
    t.float('Price')
    t.integer('NumberOfPeople')
    t.float('AvgRate')
    t.integer('NumberOfVote')
    t.timestamp('Updated_At').defaultTo(knex.fn.now());
    t.timestamp('Created_At').defaultTo(knex.fn.now());
  })
}

export function down(knex) {
  return knex.schema.dropTable('Articles')
}
