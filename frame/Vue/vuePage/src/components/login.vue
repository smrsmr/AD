<template>
  <section v-loading.fullscreen.lock="fullscreenLoading"
           element-loading-text="拼命加载中"
           element-loading-spinner="el-icon-loading"
           element-loading-background="rgba(255, 255, 255, 0.7)"
  >
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="50px" class="demo-ruleForm">
      <el-form-item label="账号" prop="name">
        <el-input v-model.number="ruleForm2.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>
<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        setTimeout(() => {
          if (Number.isInteger(value)) {
            callback(new Error('请输入中文或者英文'));
          } else {
            callback();
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else {
          callback()
        }
      };
      return {
        ruleForm2: {
          name: '',
          pass: ''
        },
        rules2: {
          name: [
            { validator: checkAge, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        },
        fullscreenLoading: false
      };
    },
    methods: {
      open(text) {
        this.$alert(text,'提示', {
          confirmButtonText: '确定',
          type: 'warning'
        });
      },
      openFullScreen() {
        this.fullscreenLoading = true;
      },
      submitForm(formName) {
        this.openFullScreen();
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let bm={
              name:this.ruleForm2.name,
              pass:this.ruleForm2.pass
            };
            this.axios.post('http://127.0.0.1:3001/login',bm).then((res)=>{
              //console.log(res.data);
              if (res.data.status==1){
                this.fullscreenLoading = false;
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user_name', res.data.user_name);
                this.$router.push({path: '/HelloWorld', query:{}});
                this.$store.commit('getUser',localStorage.getItem('user_name'));
              } else if (res.data.status==2){
                this.open(res.data.mess);
                this.fullscreenLoading = false;
              } else {
                this.open(res.data.mess);
                this.fullscreenLoading = false;
              }
            }).catch((err)=>{this.open(err);this.fullscreenLoading = false;})
          } else {
            this.open('账号或密码错误');
            this.fullscreenLoading = false;
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
  section {
    width: 388px;
    height: auto;
    margin: 24px auto;
  }
</style>
