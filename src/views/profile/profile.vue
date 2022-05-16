<template>
  <div id="profile">
    <nav-bar fontSize="18px">
        <div slot="center">我的</div>
    </nav-bar>
    <top></top>
    <account></account>
    <profile-list></profile-list>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar'

import Top from './childComponents/Top'
import Account from './childComponents/Account'
import ProfileList from './childComponents/ProfileList.vue'
export default {
  components: {
    NavBar,
    Top,
    Account,
    ProfileList
  }
}
</script>

<style>
  #profile{
    background-color: var(--color-tint);
  }
</style>