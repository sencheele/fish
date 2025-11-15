export const initPhoneMask = () => {
  const inputs = document.querySelectorAll('input[type="tel"]')

  if (inputs.length === 0) return

  inputs.forEach(input => {
    input.addEventListener('input', (event) => {
      let value = event.target.value.replace(/\D/g, '')

      if (value.startsWith('8')) value = value.slice(1)
      if (value.startsWith('7')) value = value.slice(1)

      let formatted = '+7 '

      if (value.length > 0) formatted += value.substring(0, 3)
      if (value.length >= 4) formatted += ' ' + value.substring(3, 6)
      if (value.length >= 7) formatted += ' ' + value.substring(6, 8)
      if (value.length >= 9) formatted += ' ' + value.substring(8, 10)

      event.target.value = formatted
    })
  })
}
