var app = new Vue({
  el: '#app',
  data: {
    resume: {
      name: '姓名',
      gender: '男',
      birthday: '1992年4月',
      jobTitle: '前端工程师',
      phone: '13400050527',
      email: 'example@example.com'
    }
  },
  methods: {
    onEdit(key,value) {
      this.resume[key] = value
    }
  }
})