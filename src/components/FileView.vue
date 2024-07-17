<script setup lang="ts" name="home">
import { computed, nextTick, ref, onMounted } from 'vue';
//引入VueOfficeDocx组件
import VueOfficeDocx from '@vue-office/docx';
//引入VueOfficeExcel组件
import VueOfficeExcel from '@vue-office/excel';
//引入相关样式
import '@vue-office/docx/lib/index.css';
const docx = ref('/file/test.docx'); //设置文档网络地址，可以是相对地址
const excel = ref('/file/test.xlsx'); //设置excel网络地址，可以是相对地址
const pptx = ref('/file/test.pptx'); //设置ppt网络地址，可以是相对地址

const renderedHandler = () => {
  console.log('渲染完成');
};
const errorHandler = () => {
  console.log('渲染失败');
};

const options = {
  beforeTransformData: function (workbookData: any) {
    console.log(111);
    console.log(workbookData);

    //修改workbookData，可以打印出来看看数据格式
    return workbookData;
  },
};
</script>

<template>
  <div>
    <h1>PPT文档预览</h1>
    <iframe :src="`/PPTXjs-1.21.1/index.html?file=` + pptx" width="100%" height="900" frameborder="0"></iframe>
    <h1>word文档预览</h1>
    <vue-office-docx
      :options="options"
      :src="docx"
      style="width: 100%; height: 900px"
      @rendered="renderedHandler"
      @error="errorHandler"
    />
    <h1>excel预览</h1>
    <vue-office-excel
      :src="excel"
      style="width: 100%; height: 900px"
      @rendered="renderedHandler"
      @error="errorHandler"
    />
  </div>
</template>

<style scoped></style>
