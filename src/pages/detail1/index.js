Page({
  data: {
    gender: "",
    genderPartner: "",
    isvn: true,
    isnew: true,
    qs3: true,
    selected1: 'Item 2',
    selected2: null,
    selected3: [
      { key: 1, label: 'Item 1' },
      { key: 2, label: 'Item 2' },
      { key: 3, label: 'Item 3' }
    ],
    items1: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    items2: [
      { key: 1, label: 'Item 1' },
      { key: 2, label: 'Item 2' },
      { key: 3, label: 'Item 3' },
      { key: 4, label: 'Item 4' },
      { key: 5, label: 'Item 5' },
      { key: 6, label: 'Item 6' },
      { key: 7, label: 'Item 7' },
      { key: 8, label: 'Item 8' },
      { key: 9, label: 'Item 9' }
    ],
    items: [
      { name: 'angular', value: 'Công dân(Việt Nam) - Công dân (Việt Nam)' },
      { name: 'react', value: 'Công dân(Việt Nam) - Công dân (Ngoại quốc)', checked: true },
      { name: 'polymer', value: 'Công dân(ngu) - Công dân (Việt Nam)' },
      { name: 'vue', value: 'Vue.js' },
      { name: 'ember', value: 'Ember.js' },
      { name: 'backbone', value: 'Backbone.js', disabled: true }
    ]
  },
  onTapYes(e) {
    this.setData({qs1: true});
  },
  onTapNo(e) {
    this.setData({qs1: false});
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