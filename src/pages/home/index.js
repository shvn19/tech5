import {populars} from '../../configs/apis';
Page({
  data: {
    value: '',
    populars: populars,
  },
  handleChangeInput(e) {
    this.setData({
      value: e.detail.value,
    });
  },
  handleTapCloseIcon(e) {
    this.setData({
      value: "",
    });
  },
  handleOnTap() {
    console.log("handleOnTap");
    my.navigateTo({url: 'pages/search/index'});
  },
  onLoad(query) {
    console.log('onLoad');
  },
  onReady() {
    console.log('onReady');
  },
  onShow() {
    console.log('onShow');
  },
  onHide() {
  },
  onUnload() {
  }
});