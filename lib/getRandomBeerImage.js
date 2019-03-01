const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

const images = [
  'https://images.unsplash.com/photo-1530887534856-8904b1eaf186?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
  'https://images.unsplash.com/photo-1549449943-36943e56b88b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2740&q=80',
  'https://images.unsplash.com/photo-1512487946707-49b92e752d88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
  'https://images.unsplash.com/photo-1513189737554-b1bbd839b9a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
]

export const getRandomBgImage = () => images[getRandomInt(images.length)]
