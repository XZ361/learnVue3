<script lang="jsx">
import { ref } from 'vue'

// 在单文件组件中使用jsx语法
// 原始写法
    /* export default{
        data() {
            return {
                counter: 0
            }
        },
        render() {
            return (
               <>
                 <div>comp</div>
                <p onClick={this.onclick}> {this.counter}</p>
               </>
            )
        },
        methods: {
            onclick() {
                this.counter++
            }
        },
    } */
// setUp写法
export default{
    setup(){
        const counter = ref(0)
        const onclick = ()=>{
            counter.value++
        }
        return ()=> (
            <>
                <div>comp</div>
                <p onClick={onclick}>{counter.value}</p>
            </>
        )
        
    }
}
</script>

<style lang="scss" scoped>

</style>
