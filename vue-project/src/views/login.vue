<script setup>
import { ref, reactive } from 'vue';
import { login } from '../api/api';
import { setToken } from '../utils/auth';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus'
//实例化
const router = useRouter()
//获取标签dom
const ruleFormRef = ref()

const loading = ref(false)
//响应式数据
const temp = reactive({
    account: '',
    password: ''
})
//表单校验
const rules = reactive({
    account: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 2, max: 18, message: '长度3-18位', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 2, max: 18, message: '长度3-18位', trigger: 'blur' },
    ],
})
//重置表单内容
const resetForm = (formEl) => {
    if (!formEl) return
    formEl.resetFields()
}
//提交账号密码
function submitForm(formEl) {
    if (!formEl) return
    loading.value = true
    formEl.validate(async (valid, fields) => {
        if (valid) {
            const res = await login(temp);
            const { token, status, msg } = res.data
            if (status === 2) {
                setToken(token)
                router.push('./home')
                loading.value = false
            } else {
                open3(msg)
            }
        } else {
            open2()
        }
    })
}

const open2 = (msg='请输入账号或者密码') => {
    loading.value = false
  ElMessage({
    message:msg,
    type:'warning'
  })
}
const open3 = (msg='校验位通过') => {
    loading.value = false
  ElMessage.error(msg)
}

</script>

<template>
    <div class="l-content">
        <div class="l-block">
            <el-icon :size="50" color="#363991">
                <UserFilled />
            </el-icon>
            <div class="l-logintype">
                <h3>账号登录</h3>
            </div>

            <el-form ref="ruleFormRef" :model="temp" :rules="rules">

                <el-form-item lable="账号" prop="account">
                        <el-input v-model="temp.account" placeholder="请输入账号" />
                </el-form-item>
        
                <el-form-item lable="密码" prop="password">
                    <el-input v-model="temp.password" placeholder="请输入密码" type="password" />
                </el-form-item>
                
                <el-form-item>
                     <el-button round :loading="loading" @click="submitForm(ruleFormRef)">登录</el-button>
                </el-form-item>
               

            </el-form>

       
            <div class="l-forget">
                <span>忘记密码</span>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.l-content{
    background-color: #F5F5F5;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .l-block{
        min-width: 300px;
        min-height: 250px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .l-logintype{
            width: 100%;
            margin-bottom: 10px;
        }

        .el-form{
            width: 100%;
                
            ::v-deep .el-input__wrapper{
                border-radius: 20px;
            }
            
            .el-button{
                width: 100%;
                background-color: #363991;
                font-size: 16px;
                color: #FFFFFF;
            }
        }

     

        .l-forget{
            width: 100%;
            font-size: 12px;
            color: #999999;
        }
    }
}
</style>