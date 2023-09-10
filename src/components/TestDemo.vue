<template>
  <div>
    <Home></Home>
    <parser :form-conf="formConf" @submit="sumbitForm1" />
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { Home, SvgIcon } from "../../form-generator/form-gen-component.umd";
import "../../form-generator/form-gen-component.css";
import Parser from "form-gen-parser";

// window.Vue.use(SvgIcon);

export default {
  components: {
    Home,
    Parser,
  },
  data() {
    return {
      formConf: {
        fields: [
          {
            __config__: {
              label: "单行文本",
              labelWidth: null,
              showLabel: true,
              changeTag: true,
              tag: "el-input",
              tagIcon: "input",
              required: true,
              layout: "colFormItem",
              span: 24,
              document: "https://element.eleme.cn/#/zh-CN/component/input",
              regList: [
                {
                  pattern: "/^1(3|4|5|7|8|9)\\d{9}$/",
                  message: "手机号格式错误",
                },
              ],
            },
            __slot__: {
              prepend: "",
              append: "",
            },
            __vModel__: "mobile",
            placeholder: "请输入手机号",
            style: {
              width: "100%",
            },
            clearable: true,
            "prefix-icon": "el-icon-mobile",
            "suffix-icon": "",
            maxlength: 11,
            "show-word-limit": true,
            readonly: false,
            disabled: false,
          },
          {
            __config__: {
              label: "自定义组件",
              showLabel: true,
              changeTag: true,
              labelWidth: null,
              tag: "MyComponent",
              tagIcon: "my-component",
              defaultValue: null,
              span: 24,
              layout: "colFormItem",
              required: true,
              regList: [],
              document: "http://tinymce.ax-z.cn",
              formId: 101,
              renderKey: "1011694354519641",
            },
            placeholder: "请输入自定义组件",
            height: 300,
            branding: false,
            __vModel__: "field101",
          },
        ],
        formRef: "elForm",
        formModel: "formData",
        size: "medium",
        labelPosition: "right",
        labelWidth: 100,
        formRules: "rules",
        gutter: 15,
        disabled: false,
        span: 24,
        formBtns: true,
      },
    };
  },
  methods: {
    sumbitForm1(data) {
      console.log("sumbitForm1提交数据：", data);
    },
  },
};
</script>
