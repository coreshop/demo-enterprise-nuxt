<template>
  <header id="header-area">
    <div class="header-top">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <nuxt-link :href="`/`" class="nav-link">Home</nuxt-link>
              </li>
              <CustomerWidget/>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <nuxt-link :href="`#`" class="nav-link">Wishlist</nuxt-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="languageDropdown" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false">
                  Language
                </a>
                <div class="dropdown-menu" aria-labelledby="languageDropdown">
                  <nuxt-link :href="`#`" class="dropdown-item">de</nuxt-link>
                  <nuxt-link :href="`#`" class="dropdown-item">en</nuxt-link>
                </div>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>

    <div class="main-header">
      <div class="container">
        <div class="row">
          <SearchWidget/>

          <div class="col-md-6">
            <div id="logo">
              <nuxt-link :href="`/`">
                <img src="~/assets/images/logo-full.svg" title="CoreShop" alt="CoreShop" class="img-fluid" width="300"/>
              </nuxt-link>
            </div>
          </div>

          <CartWidget/>
        </div>
      </div>
    </div>

    <CategoryMenu/>
  </header>
</template>