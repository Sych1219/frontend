<template>
  <div class="main">
    <cube-form :model="model" @submit="submitHandler">
      <cube-form-group>
        <cube-form-item :field="fields[0]"></cube-form-item>
        <cube-form-item :field="fields[1]"></cube-form-item>
      </cube-form-group>
      <cube-form-group>
        <cube-button type="submit">登陆</cube-button>
      </cube-form-group>
    </cube-form>
    <router-link to="/register" class="reg">注册</router-link>
  </div>
</template>

<script>
import { loginApi } from "@/api/getData.js";
export default {
  data() {
    return {
      validity: {},
      valid: undefined,
      model: {
        nameValue: "",
        phoneValue: "",
        pwdValue: "",
      },
      fields: [
        {
          type: "input",
          modelKey: "phoneValue",
          label: "电话",
          props: {
            placeholder: "请输入电话",
          },
          rules: {
            required: true,
          },
          message: {
            required: "电话不能为空",
          },
        },
        {
          type: "input",
          modelKey: "pwdValue",
          label: "密码",
          props: {
            placeholder: "请输入密码",
            type: "password",
            eye: {
              open: false,
            },
          },
          rules: {
            required: true,
          },
          message: {
            required: "密码不能为空",
          },
        },
      ],
    };
  },
  methods: {
    submitHandler(e, model) {
      e.preventDefault();

      loginApi(model.phoneValue, model.pwdValue).then((res) => {
        console.log(res);
        if (res.data.code === 0) {
            localStorage.setItem("token", res.data.data)
            this.$store.dispatch("setToken",res.data.data)
            this.$router.push({path:"/"})
        } else {
          const totast = this.$createToast({
            txt: "登陆失败，请重新登陆",
            time: 1200,
            type: "error",
          });
          totast.show();
        }
      });
    },
  },
};
</script>

</script>
<style lang="scss" scoped>
.main {
  padding: 50px 5% 0;
  text-align: center;
}
//注册
.cube-btn {
  margin-top: 20px;
}
// 登录
.reg {
  display: inline-block;
  margin-top: 30px;
  font-size: 18px;
}
</style>