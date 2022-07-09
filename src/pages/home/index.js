import {populars} from '../../configs/apis';
Page({
  data: {
    value: '',
    populars: populars,
  },
  makeRequest() {
    this.setData({ loading: true });
    my.request({
      url: 'https://bb9f-42-115-65-149.ap.ngrok.io',
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
      dataType: "json",
      success: (response) => {
        console.log(", response", response);
        this.setData({ response, loading: false });
      }
    });
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