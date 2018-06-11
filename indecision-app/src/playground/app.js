console.log('App.js is running!')

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
}

// JSX - JavaScript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? 'Here are your options' : 'No options'}
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
)
// babel .\src\app.js --out-file=public\scripts\app.js --presets=env,react --watch

const user = {
  name: 'Ricardo',
  age: 30,
  location: 'Recife/PE'
}
function getLocation (location) {
  if (location) {
    return <p>Location: {location}</p>
  }
}

// if statements (into functions)
// ternary operation = true ? 'True' : 'False'
// logical and(&&) operator
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
)

const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
