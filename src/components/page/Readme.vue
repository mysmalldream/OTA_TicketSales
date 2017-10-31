<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-loading"></i> 欢迎页</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="ms-doc">
            <h3>欢迎访问</h3>
        </div>
		<p>易旅通后台管理系统</p>
        <!-- <div class="center">
            <vue-core-image-upload
                class="btn btn-primary"
                :crop="false"
                @imageuploaded="imageuploaded"
                :multiple="true"
                :max-file-size="5242880"
                url="http://192.168.1.109:8080/TicketSales/view/add.action" >
            </vue-core-image-upload>
        </div> -->
	</div>
    </div>
</template>

<script>
import VueCoreImageUpload from 'vue-core-image-upload'

    export default {
        components: {
            'vue-core-image-upload': VueCoreImageUpload,
        },
        data: function(){
            return {
                src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',

            }
        },
        methods:{
            imageuploaded(res) {
                console.log(res)
                if (res.errcode == 0) {
                    this.src = res.data.src;
                }
                },
        },
        created() {
    },
    }
</script>

<style scoped>
    .ms-doc{
        width:100%;
        /* max-width: 980px; */
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
    .ms-doc h3{
        padding: 9px 10px 10px;
        margin: 0;
        font-size: 14px;
        line-height: 17px;
        background-color: #f5f5f5;
        border: 1px solid #d8d8d8;
        border-bottom: 0;
        border-radius: 3px 3px 0 0;
    }
    .ms-doc article{
        padding: 45px;
        word-wrap: break-word;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .ms-doc article h1{
        font-size:32px;
        padding-bottom: 10px;
        margin-bottom: 15px;
        border-bottom: 1px solid #ddd;
    }
    .ms-doc article h2 {
        margin: 24px 0 16px;
        font-weight: 600;
        line-height: 1.25;
        padding-bottom: 7px;
        font-size: 24px;
        border-bottom: 1px solid #eee;
    }
    .ms-doc article p{
        margin-bottom: 15px;
        line-height: 1.5;
    }
    .ms-doc article .el-checkbox{
        margin-bottom: 5px;
    }

   p{  width:50%;
    margin:40px auto;
    line-height:50px;
    font-size:50px;
    text-align:center;
    -webkit-background-clip: text;    /*按文字裁剪*/
    -webkit-text-fill-color: transparent;    /*文字的颜色使用背景色*/
    background-color:red;    /*设置一个背景色*/
    background-image: -webkit-linear-gradient(-45deg, rgba(0, 0, 0, 0.6) 30%, #aff0ff 50%, rgba(0, 0, 0, 0.6) 70%);        /*设置渐变的背景，按对角线渐变*/
    background-blend-mode: hard-light;    /*设置背景为混合模式下的强光模式*/
    background-size: 200%;
    -webkit-animation: shine 2s infinite;    /*给背景添加动画改变位置*/
}
@-webkit-keyframes shine {

    from {background-position: 100%;}

    to {background-position: 0;}

}

</style>