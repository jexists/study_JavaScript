
let a = [
  {
      group: 'group1',
      students: [
          { username: 'abv', nickname: 'Bcvn'},
          { username: 'asd', nickname: 'Bcvn'},
          { username: 'abv', nickname: 'Bcvn'},
          { username: 'abv', nickname: 'Bcvn'}
      ]
  },
  {
      group: 'group2',
      students: [
          { username: 'abv', nickname: 'Bcvn'},
          { username: 'asd', nickname: 'Bcvn'},
          { username: 'abv', nickname: 'Bcvn'},
          { username: 'abv', nickname: 'Bcvn'}
      ]
  },
  {
      group: 'group3',
      students: [
          { username: 'abv', nickname: 'Bcvn'},
          { username: 'asd', nickname: 'Bcvn'},
          { username: 'abv', nickname: 'Bcvn'},
          { username: 'abv', nickname: 'Bcvn'}
      ]
  }
]

a.map(v => {
  v.students.map(s => console.log(s.username.concat(s.nickname)))
})