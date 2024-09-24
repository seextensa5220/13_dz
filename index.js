export async function fetchUsers(){
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    console.log(users)
    return users
} catch (error) {
    console.error('Призошла ошибка при получении пользователей')
}
  }
  fetchUsers()