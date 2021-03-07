<template>
  <div id="PaginationComp">
      <div class="container">
        <div class="row">
          <h2>Page {{ page }}</h2>
          <ul>
            <li v-for="(list, index) in listData" :key="index">{{list.author}}</li>
          </ul>
        </div>
        <div class="row">
          <div class="col-12">
            <paginate
                :page-count="5"
                :page-range="3"
                :click-handler="_onClickSwitchPage"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :container-class="'pagination'"
                :page-class="'page-item'"
                :page-link-class="'page-link'"

                :prev-class="'page-item'"
                :prev-link-class="'page-link'"
                :next-class="'page-item'"
                :next-link-class="'page-link'"
            >
            </paginate>
          </div>
        </div>
      </div>
  </div>
</template>

<script lang="js" src="./PaginationComp.js"></script>
<style lang="css" src="./PaginationComp.css"></style>
