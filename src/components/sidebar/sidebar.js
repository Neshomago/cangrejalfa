import React, { Component } from "react";

class Sidebar extends Component {
  render() {
return (
<aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="../../index3.html" className="brand-link">
          {/*<img
            src="../../dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />*/}
          <span className="brand-text font-weight-light">Cangrejal de Fa</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              {/* <img
                src="../../dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              /> */}
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Monica Carvajal
              </a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Ordenes
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="../../index.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Nueva Orden</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="../widgets.html" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    Widgets
                    <span className="right badge badge-danger">New</span>
                  </p>
                </a>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-copy" />
                  <p>
                    Layout Options
                    <i className="fas fa-angle-left right" />
                    <span className="badge badge-info right">6</span>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="../layout/top-nav.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Top Navigation</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../layout/boxed.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Boxed</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../layout/fixed-sidebar.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Fixed Sidebar</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../layout/fixed-topnav.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Fixed Navbar</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../layout/fixed-footer.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Fixed Footer</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="../layout/collapsed-sidebar.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Collapsed Sidebar</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
);
  }
}

export default Sidebar;
