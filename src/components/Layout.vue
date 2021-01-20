<template>
  <nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
      <ul class="nav metismenu" id="side-menu">
        <li class="nav-header" id="bl-header">
          <div class="dropdown profile-element">
            <img
              alt="image"
              class="rounded-circle"
              src="/hello-vue/src/assets/duong.jpg"
            />
            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
              <span class="block m-t-xs font-bold">dd</span>
              <span class="text-muted text-xs block"
                >de <b class="caret"></b
              ></span>
            </a>
            <ul class="dropdown-menu animated fadeInRight m-t-xs">
              <li>
                <a
                  class="dropdown-item"
                  href="/administrator/profile/updateprofile?backlink=@Html.GetUriEncode()"
                  >Profile</a
                >
              </li>
              <li>
                <a
                  href="/administrator/profile/changepassword?backlink=@Html.GetUriEncode()"
                  >Change Password</a
                >
              </li>
              <li>
                <a class="dropdown-item" target="_blank" href="/"
                  >Go to frontend</a
                >
              </li>
              <li class="dropdown-divider"></li>
              <li>
                <a class="dropdown-item" href="/administrator/logout">Logout</a>
              </li>
            </ul>
          </div>
          <div class="logo-element">
            VNC
          </div>
        </li>

        <li class="set-none">
          <a href="/administrator"
            ><i class="fa fa-dashboard"></i>
            <span class="nav-label">Dashboard</span></a
          >
        </li>
        <li class="set-none">
          <a href="#"
            ><i class="fa fa-group"></i>
            <span class="nav-label">Manage contacts</span
            ><span class="fa arrow"></span
          ></a>
          <ul class="nav nav-second-level collapse">
            <li>
              <a href="/administrator/contacts/listcontact"
                ><i class="fa fa-address-book"></i> Contacts</a
              >
            </li>
            <li>
              <a href="/administrator/contacts/listSubscribe"
                ><i class="fa fa-address-book"></i> Subscribes
              </a>
            </li>
            <li>
              <a href="/administrator/Promotions/ListPromotion"
                ><i class="fa fa-bell-o"></i> Promotions</a
              >
            </li>
            <li>
              <a href="/administrator/groups/listgroup"
                ><i class="fa fa-sitemap"></i> Group contacts</a
              >
            </li>
          </ul>
        </li>
        <li class="set-none">
          <a href="#"
            ><i class="fa fa-group"></i>
            <span class="nav-label">Manage contacts</span
            ><span class="fa arrow"></span
          ></a>
          <ul class="nav nav-second-level collapse">
            <li>
              <a href="/administrator/contacts/listcontact"
                ><i class="fa fa-address-book"></i> Contacts</a
              >
            </li>
            <li>
              <a href="/administrator/contacts/listSubscribe"
                ><i class="fa fa-address-book"></i> Subscribes
              </a>
            </li>
            <li>
              <a href="/administrator/Promotions/ListPromotion"
                ><i class="fa fa-bell-o"></i> Promotions</a
              >
            </li>
            <li>
              <a href="/administrator/groups/listgroup"
                ><i class="fa fa-sitemap"></i> Group contacts</a
              >
            </li>
          </ul>
        </li>
      </ul>
      <button class="btn btn-danger">tutu</button>
      <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"
        ><i class="fa fa-bars"></i>
      </a>
    </div>
  </nav>
</template>

<style>
.navbar-default {
  max-width: 200px;
}
</style>
