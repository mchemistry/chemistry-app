<template>
  <div class="main">
    <nav class="navbar">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/login">
          <p class="logo">C-LAB</p>
        </nuxt-link>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <b-tag rounded type="is-success" class="level">Gà con</b-tag>
          <b-dropdown position="is-bottom-left" append-to-body aria-role="menu">
            <a slot="trigger" class="navbar-item" role="button">
              <img src="../static/avatar.jpg" alt="avatar" class="avatar" />
              <b-icon icon="menu-down" class="icon-dropdown"></b-icon>
            </a>

            <b-dropdown-item custom aria-role="menuitem" class="fix-text">
              Đăng nhập với
              <b>&nbsp;Tandv</b>
            </b-dropdown-item>
            <hr class="dropdown-divider" />
            <b-dropdown-item value="settings" class="fix-text">
              <b-icon icon="settings"></b-icon>
              <p class="text-menu">Cài đặt</p>
            </b-dropdown-item>
            <b-dropdown-item
              value="logout"
              aria-role="menuitem"
              class="fix-text"
            >
              <b-icon icon="logout"></b-icon>
              <p class="text-menu">Đăng xuất</p>
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </nav>
    <nuxt />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by
          <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
          licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
          website content is licensed
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >CC BY NC SA 4.0</a
          >.
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.main {
  overflow: hidden;
}
.logo {
  color: white;
  font-size: 30px;
  text-align: center;
  width: 100%;
  font-family: 'Orbitron', sans-serif;
  padding: 0;
}
.navbar {
  background-color: #7957d5;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.navbar-item {
  color: white;
}
.level {
  margin-right: 80px;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.navbar-item:hover {
  background-color: #7957d5;
}
.dropdown-divider {
  color: #7957d5;
}
.fix-text {
  color: #7957d5;
  display: flex;
  flex-direction: row;
}
.text-menu {
  margin-left: 10px;
}
.fix-text:hover {
  background-color: #7857d59c;
  color: white;
}
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid yellow;
}
.avatar:hover {
  border: 1px solid #7957d5;
}
.icon-dropdown:hover {
  color: white;
}
</style>
