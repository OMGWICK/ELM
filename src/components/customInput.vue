<template>
  <input
    :type="type"
    :placeholder="placeholder"
    @input="model"
    class="input"
    :class="{ 'login-input': isLogin, focus: isFocusAnima }"
    maxlength="16"
  />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '搜索',
    },
    isLogin: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    isFocusAnima: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    event: 'model',
    prop: 'text',
  },
  methods: {
    model(e) {
      this.$emit('model', e.target.value);
    },
  },
};
</script>

<style lang="less" scoped>
input {
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  line-height: 100%;
  border: none;
  background-color: white;
  outline: none;
  border: 0.10666666666666667rem;
  padding: 3%;
  color: rgb(121, 121, 121);
  &:disabled {
    background-color: white;
  }
}
.login-input {
  border: 0.05333333333333334rem solid #ddd;
  margin-bottom: 1.0666666666666667rem;
  border-radius: 0.16rem;
}
.focus {
  &:focus {
    border: 0.05333333333333334rem solid #0089dc;
  }
}
</style>
