import {detail0, detail1} from '../../configs/apis';

Page({
  data: {
    items: [
      { name: 'Cả hai bạn đều là công dân Việt Nam', value: "0" },
      { name: 'Một trong hai bạn không phải là công dân Việt Nam', value: "1" }
    ],
    detail0,
    detail1,
    selected: '',
    // items1: [
    //   { label: 'Cả hai bạn đều là công dân Việt Nam', value: 0 },
    //   { label: 'Một trong hai bạn không phải là công dân Việt Nam', value: 1}
    // ],
  },
  onChange(e) {
    console.log('onChange', e.detail);
    this.setData({
      selected: e.detail.value
    });
  },
	onLoad(query) {
	},
	onReady() {
	},
	onShow() {
	},
	onHide() {
	},
	onUnload() {
	}
});