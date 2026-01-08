export const loadJSON = async (path) => {
  const response = await fetch(path)

  if (!response.ok) {
    throw new Error('Ошибка. Проблемы с подключением к сети.')
  }

  const contentType = response.headers.get('content-type')

  if (!contentType || !contentType.includes('application/json')) {
    throw new Error('Ошибка. Не удалось обработать данные.')
  }

  const data = await response.json()

  return data
}
