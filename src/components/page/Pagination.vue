<template>
  <div class="paging">
    <ul class="am-pagination am-pagination-centered">
      <!--隐藏的用于判断的数组-->
      <li v-text="pagingNowNumberList" style="display: none;"></li>
      <li class="am-disabled">
        <a>共{{total}}条</a>
      </li>
      <li v-on:click="goPage(1)">
        <a>首页</a>
      </li>
      <li>
        <a v-on:click="previouspaging">上一页</a>
      </li>
      <li v-for="(item,index) in paging.numberList" :class="paging.activepaging == item ? 'am-active' : ''">
        <a :class="judgeClass(index)" v-on:click="gopaging(item,judgeClass(index))" style="width: 45.78px;text-align: center;padding-left: 0;padding-right: 0;">{{item}}</a>
      </li>
      <li>
        <a v-on:click="nextpaging">下一页</a>
      </li>
      <li v-on:click="goPage(max)">
        <a>尾页</a>
      </li>
      <!-- 跳转页码,后期开放 -->
      <!-- <li>
        <a style="padding: 5.5px 0;">
          <input type="text" v-on:keyup.enter="customGoTopaging" v-model="paging.customNumber" style="width: 30px;padding: 2px;border: 0;text-align: center;" />
        </a>
      </li>
      <li>
        <a v-on:click="customGoTopaging">跳转</a>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'paging',
  //max最大页数 total总共数据条数 nowPageOnOff开关 重新跳转到第一页
  props: ['max', 'total', 'nowPageOnOff'],
  data() {
    return {
      //控制页数的相关对象
      paging: {
        //当前页数
        activepaging: 1,
        //页数显示的5个数值
        numberList: [1, 2, 3, 4, 5],
        //自定义页数的数值
        customNumber: null,
        //当前点击的是上一页还是下一页
        nextState: 0,
      }
    }
  },
  computed: {
    //计算用的paging页 不使用 只是计算每5个插入5个新paging数
    pagingNowNumberList() {
      let nowpaging = this.paging.activepaging
      let pagingList = []
      //当现在的paging数小于5时，给numberList 1-5个数值
      if (nowpaging < 5) {
        if (this.max < 5) {
          for (var i = 0; i < this.max; i++) {
            pagingList.push(i + 1)
          }
        } else {
          for (var i = 0; i < 5; i++) {
            pagingList.push(i + 1)
          }
        }
        //给实际使用的paging页赋值
        this.paging.numberList = pagingList
        return pagingList
      }
      //当现在的paging数等于paging最大值时push一个值到numberList
      if (nowpaging == this.max) {
        this.paging.numberList = [nowpaging - 4, nowpaging - 3, nowpaging - 2, nowpaging - 1, nowpaging]
        return
      }
      //当点击下一页时 
      if (this.paging.nextState == 0) {
        //当现在的paging数余5 等于0时 给实际使用的numberList赋上5个递加值
        if (nowpaging % 5 == 0) {
          if (this.max - nowpaging <= 5) {
            var cont = this.max - nowpaging + 1
            var start = 5 - cont
            nowpaging = nowpaging - start
            if (nowpaging <= 5) {
              nowpaging = 1
            } else {
              while (nowpaging % 5 != 0) {
                nowpaging = nowpaging - 1
              }
            }
            for (; nowpaging < this.max + 1; i++) {
              pagingList.push(nowpaging++)
            }
            this.paging.numberList = pagingList
          } else {
            for (var i = 0; i < 6; i++) {
              pagingList.push(nowpaging++)
            }
            this.paging.numberList = pagingList
          }
        }
        //当点击上一页时
      } else {
        //如果当前页是5 直接赋值 12345
        if (nowpaging == 5) {
          this.paging.numberList = [1, 2, 3, 4, 5]
          //否则判断余5数是否为零根据自身递减赋值给numberList
        } else {
          if (nowpaging % 5 == 0) {
            for (var i = 0; i < 6; i++) {
              pagingList.unshift(nowpaging--)
            }
            this.paging.numberList = pagingList
          }
        }
      }
      return pagingList
    }
  },
  created() {
  },
  watch: {
    //监听父级nowPageOnOff变化改变当前页码为1 一般用于重新导入新列表
    nowPageOnOff: function(val, oldVal) {
      this.paging.activepaging = 1
    }
  },
  updated() { },
  methods: {
    goPage(num) {
      this.paging.activepaging = num
      this.changePage()
    },
    //传给父组件当前页数
    changePage() {
      this.$emit('changePage', this.paging.activepaging)
    },
    //下一页的点击
    nextpaging() {
      //当点击的页数大于等于最大值
      if (this.paging.activepaging >= this.max) {
        return
      }
      //切换状态为下一页
      this.paging.nextState = 0
      let before = this.paging.activepaging
      this.paging.activepaging < this.max ? this.paging.activepaging++ : this.paging.activepaging
      //判断之前点击的数是不是5的倍数
      if ((before) % 5 == 0) {
        //如果是的话循环看看这个数跟numberList数组里的数哪一个相同
        for (var i = 0; i < this.paging.numberList.length; i++) {
          //如果相同
          if (this.paging.numberList[i] == before) {
            //并且相同的位置 是 第五位 或者 第六位 则根据自身页数插入的numberList页数数组
            if (i == 4 || i == 5) {
              this.paging.numberList = []
              for (var i = 0; i < 6; i++) {
                this.paging.numberList.push(before + i)
              }
            }
          }
        }
      }
      this.changePage()
    },
    //上一页的点击
    previouspaging() {
      //切换状态为上一页
      this.paging.nextState = 1
      let before = this.paging.activepaging
      this.paging.activepaging > 1 ? this.paging.activepaging-- : this.paging.activepaging
      //判断之前点击的数是不是5的倍数
      if ((before) % 5 == 0) {
        //如果是的话循环看看这个数跟numberList数组里的数哪一个相同
        for (var i = 0; i < this.paging.numberList.length; i++) {
          //如果相同
          if (this.paging.numberList[i] == before) {
            //并且相同的位置 是 第零位 则根据自身页数插入的numberList页数数组
            if (i == 0) {
              this.paging.numberList = []
              for (var i = 6; i > 0; i--) {
                this.paging.numberList.push(before - i)
              }
            }
          }
        }
      }
      this.changePage()
    },
    //点击页数按钮跳转到相应的页数
    gopaging(num, type) {
      if (type == 'left') {
        this.paging.nextState = 1
        this.paging.activepaging = num
        this.changePage()
        this.pagingNowNumberListMethod('left')
      } else if (type == 'right') {
        this.paging.nextState = 0
        this.paging.activepaging = num
        this.changePage()
        this.pagingNowNumberListMethod('right')
      } else {
        //根据现在获取的数值如果等于numberList里第一位 就把nextState状态改成 上一页的状态
        if (this.paging.numberList[0] == num) {
          this.paging.nextState = 1
          //根据现在获取的数值如果等于numberList里第四位 就把nextState状态改成 下一页的状态
        } else if (this.paging.numberList[4] == num) {
          this.paging.nextState = 0
        }
        this.paging.activepaging = num
        this.changePage()
      }
    },
    //自定义页数跳转
    customGoTopaging() {
      if (this.paging.customNumber == null || this.paging.customNumber == 0) {
        return
      }
      //判断跳转的页数 是不是当前页 如果是的话停止 防止二次跳转bug
      if (this.paging.activepaging == this.paging.customNumber) {
        return
      }
      let nowNumber = this.paging.customNumber;
      this.paging.activepaging = nowNumber
      this.paging.numberList = []
      //如果最大值 减去 目前的页数 小于5 那么 根据最大值 递减的数插入到numberList中
      if (this.max - nowNumber < 5) {
        //判断自定义页数的数字是否超出maxpaging范围 超出则选择最后一个页
        if (this.max < nowNumber) {
          this.paging.activepaging = this.max
        }
        for (var i = 5; i > 0; i--) {
          this.paging.numberList.push(this.max - i)
        }
        //否则根据目前的页数相减相加
      } else {
        //取当前自定义的数余5数 余的数
        let remainder = nowNumber % 5;
        //取当前自定义的数余5数 剩下的那些数
        let integer = 6 - remainder
        for (var i = remainder; i > 0; i--) {
          this.paging.numberList.push(nowNumber - i)
        }
        for (var i = 0; i < integer; i++) {
          this.paging.numberList.push(parseInt(nowNumber) + i)
        }
      }
      this.changePage()
    },
    judgeClass(index) {
      if (index == 0) {
        return 'left'
      } else if (index == (this.paging.numberList.length - 1)) {
        return 'right'
      }
    },
    //计算用的paging页 不使用 只是计算每5个插入5个新paging数
    pagingNowNumberListMethod(type) {
      let nowpaging = this.paging.activepaging
      let pagingList = []
      //当现在的paging数小于5时，给numberList 1-5个数值
      //当现在的paging数等于paging最大值时push一个值到numberList
      if (nowpaging == this.max && nowpaging > 5) {
        this.paging.numberList = [nowpaging - 4, nowpaging - 3, nowpaging - 2, nowpaging - 1, nowpaging]
        return
      }
      //当点击下一页时 
      if (this.paging.nextState == 0) {
        //当现在的paging数余5 等于0时 给实际使用的numberList赋上5个递加值
        if (nowpaging % 5 == 0) {
          if (this.max - nowpaging <= 5) {
            var cont = this.max - nowpaging + 1
            var start = 5 - cont
            nowpaging = nowpaging - start
            while (nowpaging % 5 != 0) {
              nowpaging = nowpaging - 1
            }
            for (; nowpaging < this.max + 1; i++) {
              pagingList.push(nowpaging++)
            }
            this.paging.numberList = pagingList
          } else {
            for (var i = 0; i < 6; i++) {
              pagingList.push(nowpaging++)
            }
            this.paging.numberList = pagingList
          }
        }
        //当点击上一页时
      } else {
        //如果当前页是5 直接赋值 12345
        if (nowpaging == 5) {
          this.paging.numberList = [1, 2, 3, 4, 5]
          //否则判断余5数是否为零根据自身递减赋值给numberList
        } else {
          if (nowpaging % 5 == 0) {
            for (var i = 0; i < 6; i++) {
              pagingList.unshift(nowpaging--)
            }
            this.paging.numberList = pagingList
          }
        }
      }
      if (type == 'left' && nowpaging > 5 && nowpaging % 5 != 0) {
        for (var i = 0; i < 6; i++) {
          pagingList.unshift(nowpaging--)
        }
        this.paging.numberList = pagingList
      } else if (type == 'right' && nowpaging < (this.max - 5) && nowpaging % 5 != 0) {
        for (var i = 0; i < 6; i++) {
          pagingList.push(nowpaging++)
        }
        this.paging.numberList = pagingList
      }
      this.pagingNowNumberList = pagingList
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.paging a {
  cursor: pointer;
  vertical-align: middle;
}

.am-pagination {
  padding-left: 0;
  margin: 1.5rem 0;
  list-style: none;
  color: #999999;
  text-align: left;
}

.am-pagination:before,
.am-pagination:after {
  content: " ";
  display: table;
}

.am-pagination:after {
  clear: both;
}

.am-pagination>li {
  display: inline-block;
}

.am-pagination>li>a,
.am-pagination>li>span {
  position: relative;
  display: block;
  padding: 0.5em 1em;
  text-decoration: none;
  line-height: 1.2;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0;
  margin-bottom: 5px;
  margin-right: 5px;
}

.am-pagination>li:last-child>a,
.am-pagination>li:last-child>span {
  margin-right: 0;
}

.am-pagination>li>a:hover,
.am-pagination>li>span:hover,
.am-pagination>li>a:focus,
.am-pagination>li>span:focus {
  background-color: #eeeeee;
}

.am-pagination>.am-active>a,
.am-pagination>.am-active>span,
.am-pagination>.am-active>a:hover,
.am-pagination>.am-active>span:hover,
.am-pagination>.am-active>a:focus,
.am-pagination>.am-active>span:focus {
  z-index: 2;
  color: #fff;
  background-color: #0e90d2;
  border-color: #0e90d2;
  cursor: default;
}

.am-pagination>.am-disabled>span,
.am-pagination>.am-disabled>span:hover,
.am-pagination>.am-disabled>span:focus,
.am-pagination>.am-disabled>a,
.am-pagination>.am-disabled>a:hover,
.am-pagination>.am-disabled>a:focus {
  color: #999999;
  background-color: #fff;
  border-color: #ddd;
  cursor: not-allowed;
  pointer-events: none;
}

.am-pagination .am-pagination-prev {
  float: left;
}

.am-pagination .am-pagination-prev a {
  border-radius: 0;
}

.am-pagination .am-pagination-next {
  float: right;
}

.am-pagination .am-pagination-next a {
  border-radius: 0;
}

.am-pagination-centered {
  text-align: center;
}

.am-pagination-right {
  text-align: right;
}

a {
  color: #0e90d2;
}

@media only screen and (min-width: 100px) and (max-width: 840px) {
  a {
    padding: 7px 2px!important;
  }
}
</style>