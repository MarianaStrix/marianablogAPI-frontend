<template>
  <v-flex xs12 sm12 md3 class="sidepanel">
    <v-card class="panelmenu" flat>
      <v-card-title>
        <div>
          <v-icon color="blue-grey lighten-3">label</v-icon>
          <span class="panel-name">TAGS</span>
        </div>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="panel-cloud-tags">
        <span>
          # ЗДЕСЬ ДОВАВИТЬ ТЕГИ САМЫЕ РАСПРАСТРАНЕННЫЕ
          #ddhddfd #dasdfadsf #cvfdsadsfaj #jhffajv #nbcjfasdfc
          #jcafdsfhj #fasdfas #vjdcjv
        </span>
      </v-card-text>
    </v-card>

    <v-card flat>
      <v-card-title>
        <div>
          <v-icon color="blue-grey lighten-3">folder</v-icon>
          <span class="panel-name">ARCHIVE</span>
        </div>
      </v-card-title>
      <v-divider/>
      <v-card-text class="panel-archive">
        <v-list>
          <v-list-tile v-for="item in items" :key="item.title">
            <v-list-tile-content>
              <div>
                <v-icon small color="blue-grey lighten-3">date_range</v-icon>
                <span>
                  {{item.title}}
                </span>
              </div>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card-text>
    </v-card>
  </v-flex>
</template>


<script>
  export default {
    name: "SidePanel",
    data() {
      return {
        drawer: false,
        items: [
          { title: "May 2020" },
          { title: "April 2020" },
          { title: "March 2020" },
          { title: "February 2020" },
          { title: "January 2020" },
        ]
      };
    }
  }
</script>


<style scoped>
  .v-card{
    margin-bottom: 30px;
    background-color: #fafafa;
  }
  .panel-name {
    font-size: 21px;
    letter-spacing: 2px;
  }

  .v-list{
    background-color: #fafafa;
    line-height: 1;
  }

  .panel-cloud-tags span,
  .panel-archive span {
    font-size: 16px;
  }

  .v-divider {
    border-width: 2px;
    color: #dfdfdf;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
</style>
