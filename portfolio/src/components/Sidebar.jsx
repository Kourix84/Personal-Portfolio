export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">K</div>
     <div className="sidebar-vertical">
  {/* <span>Welcome to my portfolio and looking forward to hearing from you!</span> */}
    </div>
      {/* <div className="sidebar-divider"></div> */}
      <div className="sidebar-icons">
        <a href="mailto:kourosh@kourix.me" title="Email"><i className="fas fa-envelope" target="_blank" rel="noopener noreferrer"></i></a>
        <a href="https://www.linkedin.com/in/kourosh-esmaeil-tajer/" title="LinkedIn"><i className="fab fa-linkedin" target="_blank" rel="noopener noreferrer"></i></a>
        <a href="https://github.com/Kourix84" title="GitHub"><i className="fab fa-github" target="_blank" rel="noopener noreferrer"></i></a>
        <a href="https://www.instagram.com/kourosh__e.t/" title="Instagram"><i className="fab fa-instagram" target="_blank" rel="noopener noreferrer"></i></a>
      </div>
    </aside>
  )
}
