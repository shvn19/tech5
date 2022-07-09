import {detail0, detail1} from '../../configs/apis';

Page({
  data: {
    isFirst: true,
    detail0,
    detail1,
    selected: 0,
    items1: [
      { label: 'Cả hai bạn đều là công dân Việt Nam', value: 0 },
      { label: 'Một trong hai bạn không phải là công dân Việt Nam', value: 1}
    ],
  },
  onChange(e) {
    this.setData({selected: e.detail.value});
    console.log('onChange', e.detail);
  },
  onSelect(selected) {
    this.setData({ selected });
  },
  onSelect(selected) {
    this.setData({ selected });
  },
  onTapYes(e) {
    this.setData({isFirst: !this.data.isFirst});
  },
  onTapNo(e) {
    this.setData({isFirst: !this.data.isFirst});
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