<!--<template>-->
<!--  <div id="scrollData">-->
<!--    <div class="container">-->
<!--      <div class="row">-->
<!--        <div class="col-8 ml-auto mr-auto">-->
<!--          <div class="card text-center" v-for="(record, index) in currentData" :key="index">-->
<!--            <div class="card-body">-->
<!--              <p>{{ record.name }}</p>-->
<!--            </div>-->
<!--          </div>-->
<!--          &lt;!&ndash;  END Card  &ndash;&gt;-->
<!--          <div v-if="currentData.length < totalRecord">-->
<!--            <button class="btn btn-primary btn-block" disabled v-if="animate">-->
<!--              <span class="spinner-border spinner-border-sm"></span>-->
<!--              Loading..-->
<!--            </button>-->
<!--            <button v-else class="btn btn-primary btn-block" @click="_onLoadMore(1)"> Load more</button>-->
<!--          </div>-->
<!--          &lt;!&ndash; END Load-more &ndash;&gt;-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div id="scrollData">
    <div class="container">
      <div class="row">
        <div class="col-6 ml-auto mr-auto">
          <h3 class="display-3">Pagination</h3>
          <ul>
            <li class="nav-item" v-for="(record, index) in records" :key="index">
              <a href="javascript:" class="nav-link">{{ record.title }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-6 ml-auto mr-auto">
          <button class="btn btn-primary btn-block" disabled v-if="animate">
            <span class="spinner-border spinner-border-sm"></span>
            Loading..
          </button>
          <button v-else class="btn btn-primary btn-block" @click="_onClickPageChange(5)">Load more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js" src="./ScrollLoadData.js"></script>
<style lang="css" src="./ScrollLoadData.css"></style>
