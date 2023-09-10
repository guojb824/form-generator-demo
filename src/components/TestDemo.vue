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
              label: "日期范围",
              tag: "el-date-picker",
              tagIcon: "date-range",
              defaultValue: null,
              span: 24,
              showLabel: true,
              labelWidth: null,
              required: true,
              layout: "colFormItem",
              regList: [],
              changeTag: true,
              document:
                "https://element.eleme.cn/#/zh-CN/component/date-picker",
              formId: 101,
              renderKey: 1585980082729,
            },
            style: {
              width: "100%",
            },
            type: "daterange",
            "range-separator": "至",
            "start-placeholder": "开始日期",
            "end-placeholder": "结束日期",
            disabled: false,
            clearable: true,
            format: "yyyy-MM-dd",
            "value-format": "yyyy-MM-dd",
            readonly: false,
            __vModel__: "field101",
          },
          {
            __config__: {
              layout: "rowFormItem",
              tagIcon: "row",
              label: "行容器",
              layoutTree: true,
              children: [
                {
                  __config__: {
                    label: "评分",
                    tag: "el-rate",
                    tagIcon: "rate",
                    defaultValue: 0,
                    span: 24,
                    showLabel: true,
                    labelWidth: null,
                    layout: "colFormItem",
                    required: true,
                    regList: [],
                    changeTag: true,
                    document: "https://element.eleme.cn/#/zh-CN/component/rate",
                    formId: 102,
                    renderKey: 1586839671259,
                  },
                  style: {},
                  max: 5,
                  "allow-half": false,
                  "show-text": false,
                  "show-score": false,
                  disabled: false,
                  __vModel__: "field102",
                },
              ],
              document: "https://element.eleme.cn/#/zh-CN/component/layout",
              formId: 101,
              span: 24,
              renderKey: 1586839668999,
              componentName: "row101",
              gutter: 15,
            },
            type: "default",
            justify: "start",
            align: "top",
          },
          {
            __config__: {
              label: "按钮",
              showLabel: true,
              changeTag: true,
              labelWidth: null,
              tag: "el-button",
              tagIcon: "button",
              span: 24,
              layout: "colFormItem",
              document: "https://element.eleme.cn/#/zh-CN/component/button",
              renderKey: 1594288459289,
            },
            __slot__: {
              default: "测试按钮1",
            },
            type: "primary",
            icon: "el-icon-search",
            round: false,
            size: "medium",
            plain: false,
            circle: false,
            disabled: false,
            on: {
              click: "clickTestButton1",
            },
          },
        ],
        __methods__: {
          clickTestButton1() {
            console.log(
              `%c【测试按钮1】点击事件里可以访问当前表单：
                1) formModel='formData', 所以this.formData可以拿到当前表单的model
                2) formRef='elForm', 所以this.$refs.elForm可以拿到当前表单的ref(vue组件)
              `,
              "color:#409EFF;font-size: 15px"
            );
            console.log("表单的Model：", this.formData);
            console.log("表单的ref：", this.$refs.elForm);
          },
        },
        formRef: "elForm",
        formModel: "formData",
        size: "small",
        labelPosition: "right",
        labelWidth: 100,
        formRules: "rules",
        gutter: 15,
        disabled: false,
        span: 24,
        formBtns: true,
        unFocusedComponentBorder: false,
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
