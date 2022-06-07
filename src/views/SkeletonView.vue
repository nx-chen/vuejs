<template>
  <div id="bodyTab">
    <div class="d-flex align-items-center mb-3">
      <b-progress id="progress" class="w-100" :max="maxLoadingTime" height="1.5rem">
        <b-progress-bar id="progress_inside" :value="loadingTime" :label="`${((loadingTime / maxLoadingTime) * 100).toFixed(2)}%`"></b-progress-bar>
      </b-progress>

      <b-button id="RefreshSkeleton" class="ml-3" @click="startLoading()">Reload</b-button>
    </div>

    <b-skeleton-wrapper :loading="loading">
      <template #loading>
        <b-card>
          <b-skeleton width="85%"></b-skeleton>
          <b-skeleton width="55%"></b-skeleton>
          <b-skeleton width="70%"></b-skeleton>
        </b-card>
      </template>

      <b-card>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra nunc sapien,
        non rhoncus elit tincidunt vitae. Vestibulum maximus, ligula eu feugiat molestie,
        massa diam imperdiet odio, vitae viverra ligula est id nisi. Aliquam ut molestie est.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
        turpis egestas. Phasellus at consequat dui. Aenean tristique sagittis quam,
        sit amet sollicitudin neque sodales in.
      </b-card>
    </b-skeleton-wrapper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      loadingTime: 0,
      maxLoadingTime: 100
    }
  },
  watch: {
    loading (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.clearLoadingTimeInterval()

        if (newValue) {
          this.$_loadingTimeInterval = setInterval(() => {
            this.loadingTime++
          }, 30)
        }
      }
    },
    loadingTime (newValue, oldValue) {
      if (newValue !== oldValue) {
        if (newValue === this.maxLoadingTime) {
          this.loading = false
        }
      }
    }
  },
  created () {
    this.$_loadingTimeInterval = null
  },
  mounted () {
    this.startLoading()
  },
  methods: {
    clearLoadingTimeInterval () {
      clearInterval(this.$_loadingTimeInterval)
      this.$_loadingTimeInterval = null
    },
    startLoading () {
      this.loading = true
      this.loadingTime = 0
    }
  }
}
</script>

<style lang="less">
#progress_inside {
  background-color: rgb(159, 193, 194);
}

#progress {
  margin-right: 20px;
}

#RefreshSkeleton {
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

#RefreshSkeleton:hover {
  background-color: #fff;
}

#RefreshSkeleton:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  #RefreshSkeleton {
    min-width: 120px;
    padding: 0 25px;
  }
}

</style>
