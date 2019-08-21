<template>
    <div class="edit_container">
        <quill-editor
            v-model="content"
            ref="myQuillEditor"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @change="onEditorChange($event)"
        ></quill-editor>
        <button v-on:click="saveHtml">保存</button>
    </div>

</template>

<script>

export default {
    name: "App",
    data() {
        return {
            content: `<p>hello world</p>`,
            editorOption: {
                theme: "snow"
            }
        };
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        }
    },
    methods: {
          // 准备编辑器
        onEditorReady(editor) {
           console.log('ready editor')
        },

        // 失去焦点事件
        onEditorBlur() {
            console.log('lose blur')
        }, 

        // 获得焦点事件
        onEditorFocus() {
              console.log('get blur')
        }, 

        // 内容改变事件
        onEditorChange() {
              console.log('change blur')
        }, 

        // 保存提交
        saveHtml(event) {
            console.log(this.content)
        }
    }
}
</script>
<style lang='scss' scoped>
.edit_container {
    width: 500px;
    height: 400px;
}
</style>