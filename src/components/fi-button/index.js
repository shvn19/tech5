Component({
  data: {
    showBottomSheet: false,
  },
  props: {
    top: "",
    left: "",
    title: "",
    defaultShow: false,
  },
  methods: {
    onTap() {
      this.setData({
        showBottomSheet:true
      })
    },
    onClose() {
      this.setData({
        showBottomSheet:false
      })
    },
  },
});
