import './style.css'

export default function Header() {
  return(
    <header>
      <div className="content-limiter">
        <div className="logo">
          <h1>APP tarefas</h1>
        </div>
        <div className="menu">
          <nav>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </nav>
        </div>
      </div>
    </header>
  )
}