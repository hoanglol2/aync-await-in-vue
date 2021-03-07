<template>
  <div id="asyncComp">
    <!-- list data -->
    <div class="list-data">
      <ul>
        <li @click="handleRemoveItem(data.id)" v-for="(data, idx) in datas" :key="idx">{{ data.name }}</li>
      </ul>
    </div>

    <!-- form -->
    <form action="" class="form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label class="form-label" for="name">FullName:</label>
        <input
          class="form-input"
          type="text"
          id="name"
          v-model="nameModel"
          placeholder="Eg: ...Hoang"
        />
      </div>
      <div class="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script lang="js" src="./Asynccomponent.js"></script>
<style lang="css" src="./Asynccomponent.css"></style>